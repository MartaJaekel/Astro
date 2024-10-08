import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
} from "react";
import { getCoordinates } from "./api/getLocation";
import {
  createMercury,
  createVenus,
  createMars,
  createJupiter,
  createSaturn,
  createUranus,
  createNeptune,
} from "astronomy-bundle/planets";
import { createSun } from "astronomy-bundle/sun";
import { createMoon } from "astronomy-bundle/moon";
import { createTimeOfInterest } from "astronomy-bundle/time";
import * as d3 from "d3";
import styled from "styled-components";
import Layout from "@/components/Layout/Layout";

// Define types for planet positions and birth data
type PlanetPosition = {
  rightAscension: number; // in hours
  radiusVector: number; // distance in AU
};

type PlanetPositions = {
  sun: PlanetPosition;
  moon: PlanetPosition;
  mercury: PlanetPosition;
  venus: PlanetPosition;
  mars: PlanetPosition;
  jupiter: PlanetPosition;
  saturn: PlanetPosition;
  uranus: PlanetPosition;
  neptune: PlanetPosition;
};

type BirthData = {
  date: string;
  time: string;
  place: string;
  latitude: number;
  longitude: number;
};

// Zodiac signs and planet symbols for chart display
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const planetSymbols = {
  sun: "☉",
  moon: "☽",
  mercury: "☿",
  venus: "♀",
  mars: "♂",
  jupiter: "♃",
  saturn: "♄",
  uranus: "♅",
  neptune: "♆",
};

export default function SimplifiedBirthChart() {
  const [birthData, setBirthData] = useState<BirthData | null>(null);
  const [planetPositions, setPlanetPositions] =
    useState<PlanetPositions | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBirthData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as BirthData)
    );
  };

  const fetchAscendant = async (birthDataWithCoordinates: BirthData) => {
    try {
      const response = await fetch("/api/getAscendant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          birthDate: `${birthDataWithCoordinates.date}T${birthDataWithCoordinates.time}Z`,
          latitude: birthDataWithCoordinates.latitude,
          longitude: birthDataWithCoordinates.longitude,
        }),
      });

      const result = await response.json();
      console.log("Ascendant:", result.ascendant);
    } catch (error) {
      console.error("Error fetching Ascendant:", error);
      setErrorMessage("Failed to calculate Ascendant.");
    }
  };

  const calculatePlanetPositions = async (toi: any) => {
    try {
      const positions: PlanetPositions = {
        sun: await createSun(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        moon: await createMoon(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        mercury: await createMercury(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        venus: await createVenus(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        mars: await createMars(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        jupiter: await createJupiter(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        saturn: await createSaturn(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        uranus: await createUranus(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
        neptune: await createNeptune(
          toi
        ).getGeocentricEquatorialSphericalDateCoordinates(),
      };
      setPlanetPositions(positions);
    } catch (error) {
      console.error("Error calculating planet positions:", error);
      setErrorMessage("Failed to calculate planet positions.");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    if (!birthData?.date || !birthData?.time || !birthData?.place) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const coordinates = await getCoordinates(birthData.place);
      const birthDataWithCoordinates: BirthData = {
        ...birthData,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      };

      await fetchAscendant(birthDataWithCoordinates);

      const toi = createTimeOfInterest.fromDate(
        new Date(
          `${birthDataWithCoordinates.date}T${birthDataWithCoordinates.time}Z`
        )
      );

      await calculatePlanetPositions(toi);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "Failed to fetch coordinates. Please check the place and try again."
      );
    }
  };

  useEffect(() => {
    if (planetPositions) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); 

      const width = window.innerWidth < 600 ? window.innerWidth - 40 : 500; 
      const height = width; 
      const radius = Math.min(width, height) / 2 - 50;
      const innerRadius = radius - 60; 
      const signRadius = radius + 15; 

      const g = svg
        .attr("viewBox", `0 0 ${width} ${height}`) 
        .attr("preserveAspectRatio", "xMidYMid meet") 
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const textRadius = signRadius * 0.85; 

    
      zodiacSigns.forEach((sign, i) => {
        const angle = (i * 30 - 100) * (Math.PI / 180); 
        const x = textRadius * Math.cos(angle); 
        const y = textRadius * Math.sin(angle);

        g.append("text")
          .attr("x", x)
          .attr("y", y)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .text(sign)
          .style("font-size", window.innerWidth < 600 ? "8px" : "12px"); // Adjust font size for mobile
      });

      // Draw circles
      g.append("circle")
        .attr("r", signRadius)
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 2);

      g.append("circle")
        .attr("r", innerRadius)
        .attr("fill", "none")
        .attr("stroke", "grey")
        .attr("stroke-width", 2);

      // Draw lines to separate the houses and add house labels
      const drawHouseLinesAndLabels = () => {
        const houseCount = 12;
        const houseAngleIncrement = (360 / houseCount) * (Math.PI / 180);
        const startingAngle = (150 * Math.PI) / 180;

        for (let i = 0; i < houseCount; i++) {
          const angle = startingAngle + i * houseAngleIncrement;
          const x1 = signRadius * Math.cos(angle);
          const y1 = signRadius * Math.sin(angle);
           const x2 = 0; 
          const y2 = 0; 

          g.append("line")
            .attr("x1", x1)
            .attr("y1", y1)
            .attr("x2", x2)
            .attr("y2", y2)
            .attr("stroke", "#ccc") 
            .attr("stroke-width", 1);

          const midpointAngle = angle + houseAngleIncrement / 2;
          const labelX = (radius / 2) * Math.cos(midpointAngle);
          const labelY = (radius / 2) * Math.sin(midpointAngle);

          const houseLabels = [
            "House 1",
            "House 12",
            "House 11",
            "House 10",
            "House 9",
            "House 8",
            "House 7",
            "House 6",
            "House 5",
            "House 4",
            "House 3",
            "House 2",
          ];

          g.append("text")
            .attr("x", labelX)
            .attr("y", labelY)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(houseLabels[i])
            .style("font-size", window.innerWidth < 600 ? "8px" : "10px");
        }
      };

      drawHouseLinesAndLabels();

      
      Object.keys(planetPositions).forEach((planetKey) => {
        const planet = planetPositions[planetKey as keyof PlanetPositions];
        const angle = (planet.rightAscension * 15 - 90) * (Math.PI / 180); 
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        g.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 5)
          .attr("fill", "black");

        g.append("text")
          .attr("x", x + 10)
          .attr("y", y + 10)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .text(planetSymbols[planetKey as keyof typeof planetSymbols])
          .style("font-size", window.innerWidth < 600 ? "12px" : "16px");
      });
    }
  }, [planetPositions]);

  return (
    <>
      <Layout>
        <Wrapper>
          <h1>Birth Chart Generator</h1>
          <Form onSubmit={handleSubmit}>
            <label>
              Date of birth:
              <input
                type="date"
                name="date"
                value={birthData?.date || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Time of birth:
              <input
                type="time"
                name="time"
                value={birthData?.time || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Place of birth:
              <input
                type="text"
                name="place"
                value={birthData?.place || ""}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Generate Chart</button>
          </Form>
          {errorMessage && <Error>{errorMessage}</Error>}
          <SVG ref={svgRef} />
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin: 30px;
  height: 100vh;
  h1 {
    margin-bottom: 20px;
    font-size: 35px;
    color: #333;
  }
`;

const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-weight: bold;
    color: #333;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border 0.3s;
    outline: none;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  button {
    padding: 10px 15px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;

    &:hover {
      background-color: grey;
    }
  }
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const SVG = styled.svg`
  margin: 0 auto;
  width: 100%;
  height: auto;
  max-width: 500px;
  border-radius: 4px;
`;
