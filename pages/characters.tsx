import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";

import { format, subDays, addDays } from "date-fns";

import React from "react";

export default function Characters() {
  const router = useRouter();
  const { sign } = router.query;
  const [selectDate, setSelectedDate] = useState("today");

  const { data, error } = useSWR(
    sign ? `/api/horoscope/${sign}?date=${selectDate}` : null
  );

  const goBack = () => {
    router.back();
  };
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const date = new Date();
  // day name and number of the day
  const dayName = format(date, "EE dd");
  const yesterday = format(subDays(date, 1), "EE dd");
  const tomorrow = format(addDays(date, 1), "EE dd");
  const weeklyData = data.week;
  const monthlyData = data.month;
  return (
    <>
      <a
        onClick={goBack}
        style={{ position: "absolute", top: "20px", left: "20px" }}
      >
        <img src="/images/arrow.svg" alt="Go back" height={30} width={30} />
      </a>
      <StyledWrapper>
        <StyledTitle>{sign}</StyledTitle>
        {/* <SlideInContent> */}
        <StyledHeader>Daily Horoscope</StyledHeader>

        <StyledSection>
          <button
            className={selectDate === "yesterday" ? "selected" : ""}
            onClick={() => setSelectedDate("yesterday")}
          >
            Yesterday <br />
            <div>
              <span>{yesterday}</span>
            </div>
          </button>
          <button
            className={selectDate === "today" ? "selected" : ""}
            onClick={() => setSelectedDate("today")}
          >
            Today <br />
            <div>
              <span>{dayName}</span>
            </div>
          </button>
          <button
            className={selectDate === "tomorrow" ? "selected" : ""}
            onClick={() => setSelectedDate("tomorrow")}
          >
            Tomorrow <br />
            <div>
              <span>{tomorrow}</span>
            </div>
          </button>
        </StyledSection>

        <StyledContent>
          <p>{JSON.stringify(data.horoscope_data)}</p>
        </StyledContent>
        <StyledAdd>
          <h2> Horoscope for the week</h2>

          <p>{weeklyData && JSON.stringify(weeklyData.horoscope_data)}</p>

          <h2> Horoscope for the month</h2>

          <p>{monthlyData && JSON.stringify(monthlyData.horoscope_data)}</p>
        </StyledAdd>
      </StyledWrapper>
    </>
  );
}

const StyledHeader = styled.h2`
  font-size: 1.5rem;
  font-family: didot;
  margin-bottom: 2rem;
  text-align: center;
  text-decoration: underline;
  color: #c0afaf;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-family: didot;
    text-decoration: underline;
    color: #c0afaf;
  }
  img {
    display: block;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
    font-family: didot;

    padding: 1.3rem;
    background-color: #ffffff;
    width: 50%;
    line-height: 1.5;

    @media (max-width: 480px) {
      width: 90%;
    }
  }
`;
const StyledTitle = styled.h1`
  font-size: 3rem;
  font-family: didot;
  margin-bottom: 2rem;

  color: #4a4a4a; /* Dark gray */
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  p {
    font-size: 1rem;
    font-family: didot;
    padding: 1.3rem;
    background-color: #ffffff;
    width: 50%;
    line-height: 1.5;

    @media (max-width: 480px) {
      width: 90%;
    }
  }
  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;
const StyledSection = styled.div`
  display: flex;
  margin: auto;

  width: 50%;
  @media (max-width: 480px) {
    width: 100%;
  }

  button {
    border: 0.5px solid black;
    width: 50%;
    height: 50px;
    background-color: #ffffff;
    font-family: didot;
    font-size: 1.2rem;
    color: grey;
  }
  .selected {
    background-color: white;
  }
  a {
    position: absolute;
  }
  span {
    font-size: 1rem;
    font-style: bolder;
    color: black;
  }
`;
