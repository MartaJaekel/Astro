import React from "react";
import styled from "styled-components";
import data from "../../lib/data";
import Layout from "../Layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Image from "next/image";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import media from "css-in-js-media";

export default function Quiz() {
  const [quizStarted, setQuizStarted] = React.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [answeredQuestions, setAnsweredQuestions] = React.useState<number[]>(
    []
  );

  const handleClick = () => {
    setQuizStarted(true);
  };

  const defaults = {
    spread: 300,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 20,
    colors: ["#FFD700", "#FFD123", "#FFC30B", "#FFDF00", "#E6BE8A"],
  };
  const shootConfetti = () => {
    confetti({
      ...defaults,
      particleCount: 300,
      scalar: 1,
      shapes: ["star"],
    });
  };
  const sad = {
    spread: 40,
    ticks: 100,
    gravity: 3,
    decay: 0.94,
    startVelocity: 20,
    colors: ["black", "black", "black", "blck", "black"],
  };
  const shootSad = () => {
    confetti({
      ...sad,
      particleCount: 300,
      scalar: 1,
      shapes: ["square"],
    });
  };
  useEffect(() => {
    if (quizCompleted) {
      const timers =
        correctAnswers < 10
          ? [
              setTimeout(() => shootSad(), 0),
              setTimeout(() => shootSad(), 200),
              setTimeout(() => shootSad(), 1000),
              setTimeout(() => shootSad(), 1200),
              setTimeout(() => shootSad(), 1800),
            ]
          : [
              setTimeout(() => shootConfetti(), 0),
              setTimeout(() => shootConfetti(), 200),
              setTimeout(() => shootConfetti(), 1000),
              setTimeout(() => shootConfetti(), 1200),
              setTimeout(() => shootConfetti(), 1800),
            ];
      return () => timers.forEach(clearTimeout);
    } else {
      return;
    }
  }, [quizCompleted, correctAnswers]);

  const resetQuiz = () => {
    setQuizStarted(true);

    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setAnsweredQuestions([]);
  };

  const handleAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const userSelectedOption = event.currentTarget.textContent;

    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);

      const currentQuestion = data[currentQuestionIndex];

      if (userSelectedOption === currentQuestion.answer) {
        setCorrectAnswers(correctAnswers + 1);
      }
      if (currentQuestionIndex < data.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  return (
    <>
      <Layout>
        {!quizStarted ? (
          // If quizStarted is false, render this part
          <CardWrapper>
            <Card className="flex flex-col justify-center items-center gap-5 p-12 bg-gray-100 w-[350px] md:w-[800px] h-[470px]">
              <CardHeader style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {" "}
                Sign Quiz
              </CardHeader>
              <CardContent className="text-[18px] md:text-[25px] text-center flex flex-col items-center">
                <p>
                  Test your knowledge around Zodiac signs <br />
                  universe
                </p>
                <button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "15px 25px",
                    borderRadius: "40px",
                    fontSize: "1rem",
                    marginTop: "40px",
                    display: "flex",
                    gap: "8px",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    src="/svg/sparks.svg"
                    width={24}
                    height={24}
                    alt="stars"
                  ></Image>
                  Start Quiz
                </button>
              </CardContent>
            </Card>
          </CardWrapper>
        ) : quizCompleted ? (
          <>
            <CardWrapper>
              <Card className="flex flex-col justify-center items-center gap-5 p-12 bg-gray-100 w-[800px] h-[470px]">
                <CardHeader
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    padding: "0px",
                    textAlign: "center",
                  }}
                >
                  Quiz Completed!
                </CardHeader>
                <CardContent
                  style={{
                    fontSize: "1.5rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {correctAnswers < 10 ? (
                    <p>
                      {" "}
                      Sorry, you will not get any sparkling stars, you only got{" "}
                      {correctAnswers} of {data.length} right.
                    </p>
                  ) : (
                    <p>
                      Congratulations, you got <strong>{correctAnswers}</strong>{" "}
                      out of <strong>{data.length}</strong> questions correct!
                    </p>
                  )}
                  <ButtonRestart onClick={resetQuiz}>
                    <Image
                      src="/svg/sparks.svg"
                      width={24}
                      height={24}
                      alt="stars"
                    ></Image>
                    Play Again
                  </ButtonRestart>
                </CardContent>
              </Card>
            </CardWrapper>
          </>
        ) : (
          // If quizStarted is true, render this part
          <CardWrapper>
            <Card className="flex flex-col justify-center items-center  gap-5  bg-gray-100 w-[350px] md:w-[800px] md:h-[470px] ">
              <CardHeader
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {data[currentQuestionIndex].question}
              </CardHeader>
              <CardContent
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid>
                  {data[currentQuestionIndex].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={handleAnswer}
                    >
                      {option}
                    </Button>
                  ))}
                </Grid>
                <Count>
                  {quizStarted && !quizCompleted && (
                    <h1>
                      {currentQuestionIndex + 1}/{data.length}
                    </h1>
                  )}
                </Count>
              </CardContent>
            </Card>
          </CardWrapper>
        )}
      </Layout>
    </>
  );
}

const ButtonRestart = styled.button`
  background-color: black;
  color: white;
  padding: 15px 25px;
  border-radius: 40px;
  font-size: 1rem;
  margin-top: 40px;
  display: flex;
  gap: 8px;
`;
const Button = styled.button`
background-color: black;
  color: white;
  padding: 15px 25px;
  border-radius: 14px;
  font-size: 1rem;
  margin-top: 40px;
  width: 320px;   
  text-align: center; 
  display: inline-block; 
  cursor: pointer; 
   transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #333; 
    color: #f0e68c; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px) scale(1.05); 
  }
   &:active {
    transform: translateY(0px) scale(1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  }
  ${media("<=tablet")} {
   text-align: left;
   width: 290px;
   margin-top: 15px;
      
     }

  
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
  padding: 0 20px;
`;
const Count = styled.span`
  font-size: 1.5rem;
  display: flex;
  text-align: center;
  margin-top: 70px;
`;

const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  ${media("<=tablet")} {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;
