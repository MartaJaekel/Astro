import styled from "styled-components";
import SignCard from "../components/SignCard/SignCard";
import useSWR from "swr";
import Select from "react-select";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import { keyframes } from "styled-components";
export default function Home() {
  const [selectedSign, setSelectedSign] = useState();
  const { data, error } = useSWR("/api/signs");
  const router = useRouter();

  const options =
    data &&
    data.map((sign) => {
      return { value: sign.name, label: sign.name };
    });
  const handleChange = (selectedOption) => {
    setSelectedSign(selectedOption);
    if (selectedOption.value) {
      router.push(`/characters?sign=${selectedOption.value}`);
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!data || !Array.isArray(data)) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledNavigation>
            <img
              src="/images/astrology.jpg"
              width={300}
              height={200}
              obejct
            ></img>
          </StyledNavigation>
          <StyledSelect
            options={options}
            value={selectedSign}
            onChange={handleChange}
            placeholder="search your horoscope"
          ></StyledSelect>
          <p>Choose your Zodiac Sign</p>

          <StyledList>
            {data.map((sign) => (
              <li key={sign._id}>
                <SignCard sign={sign} />
              </li>
            ))}
          </StyledList>
        </div>
      </Container>
    </>
  );
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  img {
    object-fit: contain;
    animation: ${rotate} 30s linear infinite;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  width: 100%;
  padding: 0;
`;
const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
  }
  section {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  p {
    font-size: 2rem;
    font-family: didot;
    color: black;
    margin-top: 2rem;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;
const StyledSelect = styled(Select)`
  width: 90%;
`;
