import { useRouter } from "next/router";
import React from "react";

import styled, { createGlobalStyle, keyframes } from "styled-components";

export default function Welcome() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/homepage");
  };

  return (
    <>
      <GlobalStyle />
      <Background>
        <ImageContainer>
          <Content>
            <Title>Welcome to Astro</Title>
            <p>
              Get your daily horoscope and learn more about your zodiac sign
              with Astro
            </p>
            <button onClick={handleClick}>Get Started</button>
          </Content>
        </ImageContainer>
      </Background>
    </>
  );
}
const Content = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    font-size: 1.8rem;
    font-family: didot;
    color: white;
    margin: 0; /* Adding this to remove default margins */
  }

  button {
    background-color: white;
    color: black;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    top: 50%;
  }
`;

const scroll = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/stars.png");

  animation: ${scroll} 30s linear infinite;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   
    
    
  }
`;

const Background = styled.div`
  background-image: url("/images/stars.jpg");
  background-size: cover;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: didot;
  color: white;
`;
