import styled from "styled-components";
import SignCard from "../components/SignCard/SignCard";
import useSWR from "swr";
import Select from "react-select";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import Navigation from "../components/Navigation/Navigation";
import {Sign} from "../types/sign";
import { ActionMeta } from "react-select";





export default function Home() {
  const [selectedSign, setSelectedSign] = useState<SelectedOption | null>(null);
  const { data, error } = useSWR("/api/signs");
  const router = useRouter();

  const options =
    data &&
    data.map((sign: Sign) => {
      return { value: sign.name, label: sign.name };
    });
    interface SelectedOption{
      value: string;
      label: string; 
    }
  const handleChange = (newValue: unknown, _: ActionMeta<unknown>) => {
    const selectedOption = newValue as SelectedOption;
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
          <Navigation />
          
          <StyledSelect
            options={options}
            value={selectedSign}
            onChange={handleChange}
            placeholder="search your horoscope"
          ></StyledSelect>
          <StyledContainer>
          <StyledParagraph>
          <p>Get to know more about the Zodiac</p>
          </StyledParagraph>

          <StyledList>
            {data.map((sign) => (
              <li key={sign._id}>
                <SignCard sign={sign} />
              </li>
            ))}
          </StyledList>
          </StyledContainer>
        </div>
      </Container>
    </>
  );
}
const StyledContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;`
const StyledParagraph = styled.div`
margin: 2rem 0 2rem 0 ;

p {
  color: red;
}`



const StyledList = styled.ul`
  list-style: none;
  display: grid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
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
