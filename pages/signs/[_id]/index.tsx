import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import React from "react";
import { Button } from "@/components/ui/button";
import media from "css-in-js-media";
import Layout from "@/components/Layout/Layout";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { _id } = router.query;
  const { data: signs, isLoading, error } = useSWR(`/api/signs/${_id}`);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;
  const handleClick = () => {
    router.push(`/horoscope?sign=${signs.name}`);
  };
  return (
    <>
      <Layout>
        <StyledContainer>
          <StyledName>
            <h1>{signs.name}</h1>
          </StyledName>
          <img
            src={`/svg/${signs.name.toLowerCase()}.svg`}
            alt={`Description of ${signs.name}`}
            height={50}
            width={50}
            style={{ marginTop: "30px" }}
          />
          <StyledWrapper>
            <Section>
              <StyledDiv>
                <h4>Symbol</h4>
                <p>{signs.symbol}</p>
              </StyledDiv>
              <StyledDiv>
                <h4>Element</h4>
                <p>{signs.element}</p>
              </StyledDiv>
              <StyledDiv>
                <h4>Planet</h4>
                <p>{signs.rulingPlanet}</p>
              </StyledDiv>
              <StyledDiv>
                <h4>Lucky Day</h4>
                <p>{signs.luckyDay}</p>
              </StyledDiv>
            </Section>
          </StyledWrapper>
          <Wrapper>
            <About>
              <h1>Characteristics</h1>
              <Positive>
                <p>{signs.strength}</p>
              </Positive>
            </About>
            <About>
              <h1>Weaknesses</h1>
              <Positive>
                <p>{signs.weakness}</p>
              </Positive>
            </About>
            <About>
              <h1>Gifts</h1>
              <Positive>
                <p>{signs.gifts}</p>
              </Positive>
            </About>
            <Button
              style={{ padding: "23px", margin: "50px", cursor: "pointer" }}
              onClick={handleClick}
            >
              Get Horoscope
            </Button>
          </Wrapper>
        </StyledContainer>
      </Layout>
    </>
  );
}
const Wrapper = styled.div`
  width: 100%;

  background-color: #222121;
`;
const Positive = styled.div`
  width: 50%;
  max-width: 480px;
  margin-top: 50px;
  border-top: 1px solid #c7c7c7;
  ${media("<=tablet")} {
    width: 80%;
  }
`;
const About = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;

  h1 {
    font-size: 2rem;
    color: white;
  }

  p {
    color: white;
    text-align: left;
    margin-top: 50px;
  }
`;
const StyledDiv = styled.div`
  letter-spacing: 0;
  color: #141414;
  text-align: left !important;
  box-sizing: border-box;
  margin: 0;
  border: 0;

  font-size: 100%;
  vertical-align: baseline;
  border-top: 0.5px solid #c7c7c7;
  width: 100%;
  padding: 10px 0 25px 0;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  flex-direction: row;
`;
const StyledName = styled.div`
  h1 {
    font-size: 2rem;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  border: 0;

  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  max-width: 100vw !important;
  align-items: center;
  padding-top: 3rem;
  background-color: #f7f7f7;
  color: #141414;
`;
const Section = styled.div`
  letter-spacing: 0;
  color: #141414;
  text-align: left !important;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  width: 100%;
  max-width: 480px;
  align-self: flex-end;
`;

const StyledWrapper = styled.div`
  letter-spacing: 0;
  color: #141414;
  margin: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0);

  border: none;
  min-height: max-content;
  text-align: left !important;
  align-items: flex-start !important;
  padding: 50px 30px !important;
  overflow-x: visible;
  max-width: 700px !important;
`;
