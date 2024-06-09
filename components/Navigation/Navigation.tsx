import { keyframes } from "styled-components";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
export default function Navigation() {
    return (
        <StyledNavigation>
            <Section>
                <ul>
                    <li>
                        <Link href="/homepage">Home</Link>

                    </li>
                    <li>
                        <Link href="/homepage">Horoscope</Link>

                    </li>
                    <li>
                        <Link href="/homepage">Astrology</Link>
                    </li>
                    <li> 
                        <Link href="/homepage">Quiz</Link>
                    </li>
                </ul>
            </Section>
            <StyledImage
           
            src="/images/astrology.jpg"
alt="Astrology image"
width={300}
height={200}>
              
 
              </StyledImage>
            
            
          </StyledNavigation>
    );
}
const Section = styled.section`
position: absolute;
right: 5%;
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
}`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledNavigation = styled.div`
position : relative;
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 255px;
  margin-bottom: 1rem;
  
`;
const StyledImage = styled(Image)`
object-fit: contain;
    animation: ${rotate} 30s linear infinite;
`