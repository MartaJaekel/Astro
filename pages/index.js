import styled from "styled-components";
import SignCard from "../components/SignCard/SignCard";
import useSWR from "swr";

import Link from "next/link";

export default function Home() {
  const { data, error } = useSWR("/api/signs");
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !Array.isArray(data)) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <Link href="characters">Zodiac Signs</Link>
        <section>
          <label htmlFor="search">Find your Horoscope</label>
          <input type="text" id="search" placeholder="Search..." />
        </section>
        <StyledList>
          {data.map((sign) => (
            <li key={sign._id}>
              <SignCard sign={sign} />
            </li>
          ))}
        </StyledList>
      </Container>
    </>
  );
}
const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
  }
  section {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
`;
