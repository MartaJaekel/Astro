import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";

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

  return (
    <>
      <a onClick={goBack}>
        <img src="/images/arrow.svg" alt="Go back" height={25} width={25} />
      </a>
      <StyledTitle>{sign}</StyledTitle>
      <StyledSection>
        <button
          className={selectDate === "yesterday" ? "selected" : ""}
          onClick={() => setSelectedDate("yesterday")}
        >
          Yesterday
        </button>
        <button
          className={selectDate === "today" ? "selected" : ""}
          onClick={() => setSelectedDate("today")}
        >
          Today
        </button>
        <button
          className={selectDate === "tomorrow" ? "selected" : ""}
          onClick={() => setSelectedDate("tomorrow")}
        >
          Tomorrow
        </button>
      </StyledSection>
      <StyledContent>
        <ul>
          <li>{JSON.stringify(data.horoscope_data)}</li>
        </ul>
      </StyledContent>
    </>
  );
}
const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: didot;
`;
const StyledContent = styled.div`
  margin-top: 2rem;
  li {
    font-size: 1rem;
    list-style: none;
    font-family: didot;
  }
  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  button {
    border: 0.5px solid black;
    width: 500px;
    height: 50px;
    background-color: #f8eded;
    font-family: didot;
    font-size: 1rem;
  }
  .selected {
    background-color: white;
  }
  a {
    position: absolute;
  }
`;
