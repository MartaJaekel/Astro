import styled from "styled-components";
import SignCard from "../components/SignCard/SignCard";
import useSWR from "swr";
import Select from "react-select";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Characters from "./characters";

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
    router.push(`/signs/${selectedOption.value}`);
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!data || !Array.isArray(data)) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <StyledLink href="characters">Horoscope</StyledLink>
        <Select
          options={options}
          value={selectedSign}
          onChange={handleChange}
          placeholder="search your horoscope"
        ></Select>

        {/* Render Characters component when a sign is selected */}
        <StyledList>
          {data.map((sign) => (
            <li key={sign._id}>
              <SignCard sign={sign} />
            </li>
          ))}
        </StyledList>
      </Container>
    </>
  );
}

const StyledLink = styled(Link)`
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
