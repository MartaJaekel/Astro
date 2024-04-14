import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export default function Characters() {
  const router = useRouter();
  const { sign } = router.query;
  const [selectDate, setSelectedDate] = useState("today");
  const [showHoroscope, setShowHoroscope] = useState(false);
  const [showMonthlyHoroscope, setShowMonthlyHoroscope] = useState(false);

  const animationProps = useSpring({
    transform: showHoroscope ? "translateY(0)" : "translateY(100%)",
  });
  const monthlyAnimationProps = useSpring({
    transform: showMonthlyHoroscope ? "translateY(0)" : "translateY(100%)",
  });

  const { data, error } = useSWR(
    sign ? `/api/horoscope/${sign}?date=${selectDate}` : null
  );

  const goBack = () => {
    router.back();
  };
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const date = new Date();
  const dayName = date.getDate();
  date.setDate(date.getDate() - 1);
  date.setDate(date.getDate() + 1);
  const yesterday = date.getDate() - 1;
  const tomorrow = date.getDate() + 1;
  const weeklyData = data.week;
  const monthlyData = data.month;
  return (
    <>
      <a onClick={goBack}>
        <img src="/images/arrow.svg" alt="Go back" height={25} width={25} />
      </a>
      <StyledWrapper>
        <StyledTitle>{sign}</StyledTitle>
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
          <h2>Get the Horoscope for the week</h2>
          <img
            src="images/chevron.svg"
            height={30}
            width={30}
            onClick={() => setShowHoroscope(!showHoroscope)}
          ></img>

          {showHoroscope && (
            <animated.p style={animationProps}>
              {weeklyData && JSON.stringify(weeklyData.horoscope_data)}
            </animated.p>
          )}
          <h2>Get the Horoscope for the month</h2>
          <img
            src="images/chevron.svg"
            height={30}
            width={30}
            onClick={() => setShowMonthlyHoroscope(!showMonthlyHoroscope)}
          ></img>
          {showMonthlyHoroscope && (
            <animated.p style={monthlyAnimationProps}>
              {monthlyData && JSON.stringify(monthlyData.horoscope_data)}
            </animated.p>
          )}
        </StyledAdd>
      </StyledWrapper>
    </>
  );
}
const StyledHeader = styled.h2`
  font-size: 1.5rem;
  font-family: didot;
  margin-bottom: 2rem;
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
  }
  img {
    display: block;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
    font-family: didot;
    border: 1px solid black;
    padding: 1.3rem;
    background-color: #f8eded;
    width: 50%;
    line-height: 1.5;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
`;
const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: didot;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  p {
    font-size: 1rem;
    font-family: didot;
    border: 1px solid black;
    padding: 1.3rem;
    background-color: #f8eded;
    width: 50%;
    line-height: 1.5;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
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
  button {
    border: 0.5px solid black;
    width: 50%;
    height: 50px;
    background-color: #f8eded;
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
