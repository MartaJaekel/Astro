import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import React from "react";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { _id } = router.query;
  const { data: sign, isLoading, error } = useSWR(`/api/signs/${_id}`);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <Link href={`signs/${_id}`} passHref></Link>
      <MainWrapper>
        <StyledImageWrapper>
          <StyledImage
            src={`/images/${sign?.name.toLowerCase()}.jpeg`}
            width={200}
            height={200}
          />
        </StyledImageWrapper>
        <h1>{sign.name}</h1>
        <StyledContainer>
          <ContainerOne>
            <li>
              <strong>Element:</strong>
              {sign.element}
            </li>
            <li>
              <strong> Ruling Planet:</strong> {sign.rulingPlanet}
            </li>
            <li>
              <strong>Symbol:</strong> {sign.symbol}
            </li>
            <li>
              <strong>Compatibility:</strong> {sign.compatibility.join(", ")}
            </li>
            <li>
              <strong>Lucky Numbers:</strong> {sign.luckyNumbers.join(", ")}
            </li>
          </ContainerOne>
          <ContainerTwo>
            <li>
              <strong>Lucky Color:</strong> {sign.luckyColor}
            </li>
            <li>
              <strong>Lucky Day:</strong> {sign.luckyDay}
            </li>
            <li>
              <strong>Strengths:</strong> {sign.strengths.join(", ")}
            </li>
            <li>
              <strong>Weaknesses:</strong> {sign.weaknesses.join(", ")}
            </li>
          </ContainerTwo>
          <p>{sign.description}</p>
        </StyledContainer>
      </MainWrapper>
    </>
  );
}
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
  }
`;
const ContainerOne = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  li {
    padding: 10px;
    list-style-type: none;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f8eded;

    font-family: didot;
  }
`;
const ContainerTwo = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  li {
    padding: 10px;
    list-style-type: none;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f8eded;
    font-family: didot;
  }
  .special {
    overflow-wrap: break-word;
  }
`;
const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #724141;
  padding: 20px;
  background: linear-gradient(to right, #f8eded, #655c5c);
`;
const StyledImage = styled(Image)`
  object-fit: cover;
  align-self: center;
  width: 35%;
  height: 400px;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-family: didot;
    font-size: 1rem;
    padding: 20px;
    background-color: #fdf8f8;
  }
`;
