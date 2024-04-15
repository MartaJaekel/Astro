import styled from "styled-components";
import SignCard from "../components/SignCard/SignCard";
import useSWR from "swr";
import Select from "react-select";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

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
        <StyledTitle>Horoscope</StyledTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledSelect
            options={options}
            value={selectedSign}
            onChange={handleChange}
            placeholder="search your horoscope"
          ></StyledSelect>
          {/* Render Characters component when a sign is selected */}
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

const StyledTitle = styled.h1`
  text-decoration: none;
  color: black;
  cursor: pointer;
  display: block;
  text-align: center;
  margin: 1rem 0;
  font-size: 2rem;
  font-family: didot;
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
`;
const StyledSelect = styled(Select)`
  width: 90%;
`;
