import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navigation() {
  return (
    <StyledNavigation>
      <Part>
        <button>
       <Image src="/svg/moon.svg" alt="Astrology image" width={40} height={40}></Image>
       </button>
        <h1>Astro</h1>
      </Part>
      <Section>
        <ul>
          <li>
            <Link href="/homepage">Home</Link>
          </li>

          <li>
            <Link href="/astrology">Astrology</Link>
          </li>
          <li>
            <Link href="/quiz">Quiz</Link>
          </li>
        </ul>
      </Section>
     
      {/* <StyledImage
        src="/images/astrology.jpg"
        alt="Astrology image"
        width={300}
        height={200}
      ></StyledImage> */}
    </StyledNavigation>
  );
}
const Part = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
  position: absolute;
  left: 2%;
  top: 15%;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
const Section = styled.section`
  position: absolute;
  right: 3%;
  top: 33%;
  margin: 0;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    gap: 1.5rem;
  }
  a {
    font-size: 1rem;
    text-decoration: none;
    color: black;
    font-family: didot;
  }
  a: hover {
    text-decoration: underline;
  }
`;

const StyledNavigation = styled.div`
  position: relative;

  height: 80px;

  border-bottom: 1px solid #e7e1e1;
`;
