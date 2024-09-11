import React from "react";
import styled from "styled-components";
import data from "../../lib/data";


export default function Quiz() {

  const [quizStarted, setQuizStarted] = React.useState(false);
  const handleClick = () => {
    
    setQuizStarted(true);

  }
  return (
    <Wrapper>
      <Container>
        <Content>
          {!quizStarted ? (
            <>
          <h1>Zodiac Wisdom</h1>

          <p>Test your knowledge around the astrology universe</p>
          <button onClick={handleClick}>Start Quiz</button> </>): (
           
            <div>
               <h1>{data[0].question}</h1>
               <Grid>
                <button>
                  {data[0].options[0]}
                </button>
                <button>
                  {data[0].options[1]}

                </button>
                <button>
                  {data[0].options[2]}
                </button>
                <button>
                  {data[0].options[3]}
                </button>
               </Grid>

            </div>

          )}
        </Content>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  border-radius: 10px;
  padding: 100px;
`;
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
    font-size: 1.3rem;
  }
`;
const Grid = styled.div`
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: 1fr 1fr;
button {
width: 50%;}
`
