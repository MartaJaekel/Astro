import styled from "styled-components";
import React from "react";


import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";

export default function Astrology() {
  //   const { data, error } = useSWR("/api/signs");

  //   if (!data || !Array.isArray(data)) return <div>Loading...</div>;

  //   if (error) return <div>Error: {error.message}</div>;
  // const handleNavigation = () => {
  //     router.push(`/characters?sign=value`);
  // }

  return (
    <>
      <Layout>
        <Wrapper>
          <Section>
            <h1>Astrology</h1>
            <StyledDiv>
              <p>
                {" "}
                The word "astrology" is derived from the Greek terms for{" "}
                <strong> "star"</strong>
                (ἄστρον, astron) and <strong> "word" </strong>(λόγος, logos).
                Astrology studies the movement and positioning of the stars and
                planets around the earth and it is essentially based on
                mathematical calculations and real phenomena in the sky.
              </p>
              <Div>
                <Image
                  src="/images/zodiac.png"
                  alt="zodiac"
                  width={100}
                  height={100}
                />
              </Div>

             
            </StyledDiv>
            <StyledDivTwo>
              <p>
                Central to astrology is the concept of the zodiac, a belt
                divided into twelve equal parts, each associated with a specific
                constellation. Each of these zodiac signs is believed to possess
                distinct characteristics and traits, which are attributed to
                individuals born under that sign. Additionally, the position of
                the planets at the time of one’s birth is said to influence
                their personality and life path. The horoscope, a map of the
                celestial bodies’ positions at a specific time, such as one’s
                birth, is used by astrologers to make predictions and
                interpretations about various aspects of an individual’s life.
              </p>
            </StyledDivTwo>

            <Main>
              
            </Main>
           
          </Section>
          <Quote>
              "The stars are speaking to us- astrology teaches us how to
              listen."
            </Quote>
          <Content>
           
            <More>
            <Card style={{ backgroundColor: "rgb(252 249 249)", maxWidth: "480px", flex: 1 }}>
  <div style={{
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto', // Adjust based on content size
    gridTemplateAreas: `
      "header"
      "content"
      "footer"
    `,
    gap: '20px' // Spacing between grid items
  }}>
    <CardHeader style={{ fontWeight: "bold", gridArea: 'header' }}>
      <h1 style={{ fontSize: "1.3rem" }}>The Sun Sign</h1>
      <ImageContainer>
        <Image src="/svg/sun.svg" height={40} width={40} alt="sun" />
      </ImageContainer>
      <br />
      <span style={{ color: "#b3acac" }}>Our expression, sanity and joy.</span>
    </CardHeader>
    <CardContent style={{ gridArea: 'content' }}>
      <strong>The Sun</strong> is our basic personality, identity,
      ego, and consciousness. The journey connected to the Sun is
      discovering how we can grow our unobstructed, fullest
      expression. Our Sun indicates how we can best feed our spirit,
      and also, how we are prone to unhealthy patterns.
    </CardContent>
    {/* Example footer area, adjust as needed */}
    <div style={{ gridArea: 'footer' }}>
      {/* Footer content here */}
    </div>
  </div>
</Card>
<Card style={{ backgroundColor: "rgb(252 249 249)", maxWidth: "480px", flex: 1 }}>
  <div style={{
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto', // Adjust based on content size
    gridTemplateAreas: `
      "header"
      "content"
      "footer"
    `,
    gap: '20px' // Spacing between grid items
  }}>
    <CardHeader style={{ fontWeight: "bold", gridArea: 'header' }}>
      <h1 style={{ fontSize: "1.3rem" }}>The Moon</h1>
      <ImageContainer>
      <Image src="/svg/fullmoon.svg" height={25} width={25} alt="sun"/>
      </ImageContainer>
      <br />
      <span style={{ color: "#b3acac" }}>Our Emotions, Sensitivity, and Subconscious.</span>
    </CardHeader>
    <CardContent style={{ gridArea: 'content' }}>
    <strong>The Moon</strong> represents our inner psyche and
                  emotional nature. Some astrologers say that the Sun is how we
                  see our selfs, while the Moon is who we really are. It is the
                  emotional backdrop for all what we do, ruling our instincts
                  and vulnerability.
      
    </CardContent>
    {/* Example footer area, adjust as needed */}
    <div style={{ gridArea: 'footer' }}>
      {/* Footer content here */}
    </div>
  </div>
</Card>

              {/* <Card style={{backgroundColor:"rgb(252 249 249)", maxWidth:"480px", flex: 1}}>
                <CardHeader style={{fontWeight: "bold"}}>
                  <h1 style={{fontSize: "1.3rem"}}>The Moon</h1>
                  <ImageContainer>
                  <Image src="/svg/fullmoon.svg" height={25} width={25} alt="sun"/>
                  </ImageContainer>
                  <br />
                  <span style={{color:"#b3acac"}}>Our Emotions, Sensitivity, and Subconscious</span>
                </CardHeader>{" "}
                <CardContent>
                  <strong>The Moon</strong> represents our inner psyche and
                  emotional nature. Some astrologers say that the Sun is how we
                  see our selfs, while the Moon is who we really are. It is the
                  emotional backdrop for all what we do, ruling our instincts
                  and vulnerability.
                </CardContent>
              </Card> */}
              {/* <Card style={{backgroundColor:"rgb(252 249 249)", maxWidth:"480px",flex: 1}}>
                {" "}
                <CardHeader style={{fontWeight: "bold"}}>
                  <h1 style={{fontSize: "1.3rem"}}>The Ascendant</h1>
                  <ImageContainer>
                  <Image src="/svg/ascendant.svg" height={25} width={25} alt="sun"/>
                  </ImageContainer>
                  <br />
                  <span style={{color:"#b3acac"}}>
                  Our Outermost Layer, First Impression,
                  <br />
                  and Physical Appereance</span>
                </CardHeader>
                <CardContent>
                  <strong>Our Ascendant</strong>, or Rising Sign, describes our
                  outermost layer and how make a first impression, so how others
                  see us. It tells us us about the mask we wear and the more
                  superficial aspects of ourselfs.
                </CardContent>
              </Card> */}
              <Card style={{ backgroundColor: "rgb(252 249 249)", maxWidth: "480px", flex: 1 }}>
  <div style={{
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto', // Adjust based on content size
    gridTemplateAreas: `
      "header"
      "content"
      "footer"
    `,
    gap: '20px' // Spacing between grid items
  }}>
    <CardHeader style={{ fontWeight: "bold", gridArea: 'header' }}>
    <h1 style={{fontSize: "1.3rem"}}>The Ascendant</h1>
      <ImageContainer>
      <Image src="/svg/ascendant.svg" height={25} width={25} alt="sun"/>
      </ImageContainer>
      <br />
      <span style={{color:"#b3acac"}}>
                  Our Outermost Layer, First Impression,
                  <br />
                  and Physical Appereance</span>
    </CardHeader>
    <CardContent style={{ gridArea: 'content' }}>
    <strong>Our Ascendant</strong>, or Rising Sign, describes our
                  outermost layer and how make a first impression, so how others
                  see us. It tells us us about the mask we wear and the more
                  superficial aspects of ourselfs.
    </CardContent>
    {/* Example footer area, adjust as needed */}
    <div style={{ gridArea: 'footer' }}>
      {/* Footer content here */}
    </div>
  </div>
</Card>
            </More>
          </Content>
        </Wrapper>
      </Layout>
    </>
  );
}
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;`
const StyledDivTwo = styled.div`
  max-width: 480px;
  letter-spacing: 0;
  color: #141414;
  text-align: left !important;
  box-sizing: border-box;
  margin: 0;
  border: 0;

  font-size: 100%;
  vertical-align: baseline;

  width: 100%;
  padding: 10px 0 25px 0;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const Quote = styled.div`

  font-size: 1.5rem;
  font-style: italic;
`;
const More = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  gap: 3rem;
  margin-bottom: 2rem;

`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
const Content = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    li {
      list-style: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const StyledDiv = styled.div`
  max-width: 480px;
  letter-spacing: 0;
  color: #141414;
  text-align: left !important;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  border-top: 0.5px solid #c7c7c7;
  font-size: 100%;
  vertical-align: baseline;

  width: 100%;
  padding: 10px 0 25px 0;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  flex-direction: column;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f7f7f7;
  height: 80vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
gap: 5rem;
  h1 {
    font-size: 2.5rem;
  }
`;
