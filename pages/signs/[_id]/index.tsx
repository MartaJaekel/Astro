import { useRouter } from "next/router";
import useSWR from "swr";
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
    <StyledContainer>
    
      <StyledWrapper>
        <StyledName>
          <h1>{sign.name}</h1>
        </StyledName>
        <Section>
          <ImageContainer>
          <h1>image</h1>
          </ImageContainer>
          <StyledDiv >
            <h4>Symbol</h4>
            <p>{sign.symbol}</p>

          </StyledDiv>
          <StyledDiv>
            <h4>Element</h4>
            <p>{sign.element}</p>

          </StyledDiv>
          <StyledDiv>
            <h4>Planet</h4>
            <p>{sign.planet}</p>
          </StyledDiv>
          <StyledDiv>
            <h4>Lucky Day</h4>
            <p>{sign.luckyDay}</p>
          </StyledDiv>
        </Section>

      </StyledWrapper>
     
      </StyledContainer>
    </>
  );
}
const StyledDiv = styled.div`

letter-spacing: 0;
color: #141414;
text-align: left !important;
box-sizing: border-box;
margin: 0;
border: 0;

font-size: 100%;
vertical-align: baseline;
border-top: .5px solid #c7c7c7;
width: 100%;
padding: 10px 0 25px 0;
display: flex;
justify-content: space-between;
min-height: 60px;
flex-direction: row;`
const StyledName = styled.div`

letter-spacing: 0;
color: #141414;
text-align: left !important;
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0;
font: inherit;
font-size: 100%;
vertical-align: baseline;`
const StyledContainer = styled.div`


text-align: center;
margin: 0;
border: 0;

vertical-align: baseline;
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
padding: 3rem 0px 100px 0px !important;
background-color: #f7f7f7;
color: #141414;

`
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




`
const ImageContainer = styled.div`
  

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
background-color: #141414;
width: 100%;
height: 153px;
max-width: 500px;
margin-top: 30px;
margin-bottom: 40px;
display: flex;
align-items: center;
justify-content: center;

}
`


 

  
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
background: rgba(0,0,0,0);

border: none;
min-height: max-content;
text-align: left !important;
align-items: flex-start !important;
padding: 50px 30px !important;
overflow-x: visible;
max-width: 700px !important;


  `

           