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
              Element:
              {sign.element}
            </li>
            <li>Ruling Planet: {sign.rulingPlanet}</li>
            <li>Symbol: {sign.symbol}</li>
            <li>Compatibility: {sign.compatibility.join(", ")}</li>
            <li>Lucky Numbers: {sign.luckyNumbers.join(", ")}</li>
          </ContainerOne>
          <ContainerTwo>
            <li>Lucky Color: {sign.luckyColor}</li>
            <li>Lucky Day: {sign.luckyDay}</li>
            <li>Strengths: {sign.strengths.join(", ")}</li>
            <li>Weaknesses: {sign.weaknesses.join(", ")}</li>
            <li className="special">Lucky Day: {sign.description}</li>
          </ContainerTwo>
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
  li {
    display: flex;
    flex-direction: column;
    padding: 10px;

    font-family: didot;
  }
`;
const ContainerTwo = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    padding: 10px;

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
  flex-direction: row;
  justify-content: center;
`;
