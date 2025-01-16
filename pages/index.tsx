import styled from "styled-components";
import SignCard from "../components/SignCard/SignCard";
import useSWR from "swr";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import media from "css-in-js-media";

import Layout from "@/components/Layout/Layout";

import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

export default function Home() {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<string>("");

  const getZodiacSign = (date: string) => {
    const month = parseInt(date.split("-")[1]);
    const day = parseInt(date.split("-")[2]);

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
      return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
      return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
      return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
      return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
      return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
      return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
      return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
      return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
      return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
      return "Aquarius";
    return "Pisces";
  };

  const handleExplore = () => {
    const sign = getZodiacSign(selectedDate);
    router.push(`/horoscope?sign=${sign}`);
  };

  const { data } = useSWR("/api/signs");
  if (!data || !Array.isArray(data)) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderBottom: "1px solid #e7e1e1",
            }}
          >
            <Section>
              <Intro>
                <h1>Cosmic Insights</h1>
                <p>
                  Discover your path
                  <br />
                  trough the stars
                </p>
              </Intro>
              <Date>
                <Input
                  className="w-auto"
                  placeholder="Search for your sign"
                  type="date"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  defaultValue={new window.Date().toISOString().split("T")[0]}
                />
                <Button onClick={handleExplore}>Explore</Button>
              </Date>
            </Section>
          </div>
          <SectionZodiac>
            <h1>Zodiac Signs</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <StyledList>
                {data.map((sign) => (
                  <li key={sign._id}>
                    <SignCard sign={sign} />
                  </li>
                ))}
              </StyledList>
            </div>
          </SectionZodiac>
        </Container>
      </Layout>
    </>
  );
}
const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 1rem;
`;
const SectionZodiac = styled.section`
  display: flex;
  flex-direction: column;
  margin: 100px;
  gap: 60px;
  h1 {
    font-size: 2.5rem;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  text-align: center;

  width: 100%;
  h1 {
    font-size: 3.5rem;
    margin: 0;
    font-weight: bold;
  }
  p {
    color: #787777;
    font-size: 1.2rem;
  }
  ${media("<=tablet")} {
    margin-top: 5px;
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  ${media("<=tablet")} {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  li {
    aspect-ratio: 2 / 2.9;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
  }
  section {
    display: flex;
    justify-content: center;
   margin: 100px;
    
    ${media("<=tablet")} {
      margin: 50px;
  }
  }
 
  }
`;
