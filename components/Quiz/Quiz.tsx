import React from "react";
import styled from "styled-components";

export default function Quiz() {

    return (
<Wrapper>
        <Container>
            <Content>
            <h1>Zodiac Wisdom</h1>
            <p>Test your knowledge around the astrology universe</p>
            <button>Start Quiz</button>
            </Content>
        </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
justify-content: center;

`
const Container = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  border-radius: 10px;
  padding: 70px;


`
const Content = styled.div`
text-align: center;
font-family: didot;
font-size: 1.2rem;
button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    margin-top: 20px;
    }
    p {
    font-size: 1.3rem;}
`