import React from "react";
import styled from "styled-components";
import data from "../../lib/data";
import { set } from "mongoose";


export default function Quiz() {
  const [quizStarted, setQuizStarted] = React.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex ] = React.useState(0);
  // 
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [answeredQuestions, setAnsweredQuestions] = React.useState<number[]>([]);
  const handleClick = () => {
    setQuizStarted(true);
  };
  
  //function to increment question index when answer is clicked
//   
const handleAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
  const userSelectedOption = event.currentTarget.textContent;
  // Check if the current question has not been answered before
  if (!answeredQuestions.includes(currentQuestionIndex)) {
    // Add current question to the list of answered questions
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);

    // Get the current question object from the data array
    const currentQuestion = data[currentQuestionIndex];

    // Check if the user selected option matches the correct answer
    if (userSelectedOption === currentQuestion.answer) {
      // Increment the count of correct answers
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If there are no more questions, mark the quiz as completed
      setQuizCompleted(true);
    }
  }
};

  
  return (
    <Wrapper>
      <Container>
        <Content>
          {!quizStarted ? (
            <>
              <h1>Zodiac Wisdom</h1>
              <p>Test your knowledge around the astrology universe</p>
              <button onClick={handleClick}>Start Quiz</button>{" "}
            </>
          ) : quizCompleted? (
            <div>
              <h1>Quiz Completed!</h1>
              <p>You got {correctAnswers} out of {data.length} questions correct.</p>
            </div>
          ) : (
            <div>
              <h1>{data[currentQuestionIndex].question}</h1>
              <Grid>
                {data[currentQuestionIndex].options.map((option, index) => (
                  <button key={index} onClick={handleAnswer}>{option}</button>))}
               
              </Grid>
              
            </div>
          )}
        </Content>
        <Count>
          {quizStarted && !quizCompleted &&
                <h1>{currentQuestionIndex + 1}/{data.length}</h1>}
                
              </Count>
      </Container>
    </Wrapper>
  );
}
const Count = styled.span`
  position: absolute;
  top: 85%;
  left: 2%;
  font-size: 0.8rem;
  display: flex;
  text-align: center;
  
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  position: absolute;
  top: 65%;
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
  place-items: center;
  grid-template-columns: 1fr 1fr;
  button {
    width: 50%;
  }
`;
