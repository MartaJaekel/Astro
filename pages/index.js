import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import keyframes from "styled-components";

export default function Welcome() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/homepage");
  };
  return (
    <>
      <GlobalStyle />
      <Background>
        <h1>Welcome to Astro</h1>
        <p>
          Get your daily horoscope and learn more about your zodiac sign with
          Astro
        </p>
        <button onClick={handleClick}>get started</button>
      </Background>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Background = styled.div`
  background-image: url("/images/stars.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-size: 3rem;
    font-family: didot;
    color: white;}
    p {
      font-size: 1.5rem;
      font-family: didot;
      color: white;
    }
  }
  button {
    background-color: #f8eded;
    border: none;
    padding: 10px 20px;
    font-size: 1.5rem;
    font-family: didot;
    cursor: pointer;
   
`;
