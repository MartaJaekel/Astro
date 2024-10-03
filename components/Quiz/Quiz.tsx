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
        correctAnswers < 3
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

  //   //function to increment question index when answer is clicked
  // //
  const resetQuiz = () => {
    setQuizStarted(true); // Reset the quiz state to its initial state
    setQuizCompleted(false); // Mark the quiz as not completed
    setCurrentQuestionIndex(0); // Reset to the first question
    setCorrectAnswers(0); // Reset the correct answers count
    setAnsweredQuestions([]); // Clear the list of answered questions
  };

  const handleAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const userSelectedOption = event.currentTarget.textContent;
    //   // Check if the current question has not been answered before
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      //     // Add current question to the list of answered questions
      //

      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);

      //     // Get the current question object from the data array
      const currentQuestion = data[currentQuestionIndex];

      //     // Check if the user selected option matches the correct answer
      if (userSelectedOption === currentQuestion.answer) {
        //       // Increment the count of correct answers
        setCorrectAnswers(correctAnswers + 1);
      }
      if (currentQuestionIndex < data.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        //       // If there are no more questions, mark the quiz as completed
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
                  >
                    {/* SVG content here */}
                  </Image>
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
                  {correctAnswers < 3 ? (
                    <p> Sorry, you will not get any sparkling stars.</p>
                  ) : (
                    <p>
                      Congratulations ,you got <strong>{correctAnswers}</strong>{" "}
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
                      onClick={handleAnswer} // Minimum width for responsive buttons
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
  
  width: 320px;   /* Fixed width for all buttons */
  text-align: center; /* Center text within the button */
  display: inline-block; /* Ensures consistent button size */
  cursor: pointer; /* Add a pointer on hover */
   transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #333; /* Darken background color */
    color: #f0e68c; /* Change text color to a contrasting shade (e.g., khaki) */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3); /* Larger shadow effect */
    transform: translateY(-5px) scale(1.05); /* Slight upward movement and scale up */
  }

  /* Optional: Active button state (when clicked) */
  &:active {
    transform: translateY(0px) scale(1); /* Return to original position */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Softer shadow when clicked */

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
