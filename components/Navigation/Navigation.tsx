import { keyframes } from "styled-components";
import styled from "styled-components";
export default function Navigation() {
    return (
        <StyledNavigation>
            <Section>
                <ul>
                    <li>
                        <a href="/homepage">Home</a>

                    </li>
                    <li>
                        <a href="/homepage">Horoscope</a>

                    </li>
                    <li>
                        <a href="/homepage">Astrology</a>
                    </li>
                </ul>
            </Section>
            <img
              src="/images/astrology.jpg"
              width={300}
              height={200}
            
            ></img>
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
  img {
    object-fit: contain;
    animation: ${rotate} 30s linear infinite;
  }
`;
