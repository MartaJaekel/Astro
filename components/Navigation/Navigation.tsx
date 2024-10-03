import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the screen size on initial render
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);
  return (
    <StyledNavigation>
      <Part>
        <button>
          <Image
            src="/svg/moon.svg"
            alt="Astrology image"
            width={40}
            height={40}
          ></Image>
        </button>
        <Link href="/homepage">
          <h1>Astro</h1>
        </Link>
      </Part>

      {isDesktop ? (
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
      ) : (
        <Sheet>
          <SheetTrigger className="absolute right-2 top-4">
            <Image src="/svg/menu.svg" width={30} height={30} alt="menu" />
          </SheetTrigger>
          <SheetContent side="top" className="h-[200px] w-[100%] flex justify-center ">
            <SheetHeader>
              <SheetTitle className="text-xl text-center">Menu</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-4 mt-4 ">
                  <li>
                    <Link href="/homepage" className="underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/astrology" className="underline">
                      Astrology
                    </Link>
                  </li>
                  <li>
                    <Link href="/quiz" className="underline">
                      Quiz
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
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
