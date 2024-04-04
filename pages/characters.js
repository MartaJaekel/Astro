import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Characters() {
  const router = useRouter();
  const { sign } = router.query;
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  const { data, error } = useSWR(
    sign ? `/api/horoscope/${sign}?date=today` : null
  );

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <StyledContent>
      <h1>{sign}</h1>
      <ul>
        <li>{JSON.stringify(data.horoscope_data)}</li>
      </ul>
    </StyledContent>
  );
}
const StyledContent = styled.div`
  li {
    font-size: 1.5rem;
    list-style: none;
  }
`;
