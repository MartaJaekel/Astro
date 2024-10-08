import styled from "styled-components";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import media from "css-in-js-media";
import Link from "next/link";

export default function Astrology() {
  return (
    <>
      <Layout>
        <Wrapper>
          <Section>
            <h1>Astrology</h1>
            <StyledDiv>
              <p>
                The word <strong>&quot;astrology&quot;</strong> is derived from
                the Greek terms for
                <strong> &quot;star&quot;</strong>
                (ἄστρον, astron) and <strong>&quot; word &quot; </strong>(λόγος,
                logos). Astrology studies the movement and positioning of the
                stars and planets around the earth and it is essentially based
                on mathematical calculations and real phenomena in the sky.
              </p>
              <Div>
                <Image
                  src="/images/zodiac.png"
                  alt="zodiac"
                  width={100}
                  height={100}
                />
              </Div>
            </StyledDiv>
            <StyledDivTwo>
              <p>
                Central to astrology is the concept of the zodiac, a belt
                divided into twelve equal parts, each associated with a specific
                constellation. Each of these zodiac signs is believed to possess
                distinct characteristics and traits, which are attributed to
                individuals born under that sign. Additionally, the position of
                the planets at the time of one’s birth is said to influence
                their personality and life path. The horoscope, a map of the
                celestial bodies’ positions at a specific time, such as one’s
                birth, is used by astrologers to make predictions and
                interpretations about various aspects of an individual’s life.
              </p>
            </StyledDivTwo>
          </Section>

          <Content>
            <More>
              <div
                style={{
                  backgroundColor: "rgb(34, 33, 33)",
                  maxWidth: "480px",
                  marginBottom: "20px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "1.3rem",
                      color: "#d1cece",
                      fontFamily: "monospace",
                    }}
                  >
                    The Sun Sign
                  </h1>
                  <div>
                    <img src="/svg/sun.svg" height={40} width={40} alt="sun" />
                  </div>
                  <br />
                  <span style={{ color: "#d1cece", fontFamily: "monospace" }}>
                    Our expression, sanity and joy.
                  </span>
                </div>

                <div
                  style={{
                    color: "#d1cece",
                    textAlign: "left",
                    marginTop: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  <strong>The Sun</strong> is our basic personality, identity,
                  ego, and consciousness. The journey connected to the Sun is
                  discovering how we can grow our unobstructed, fullest
                  expression. Our Sun indicates how we can best feed our spirit,
                  and also, how we are prone to unhealthy patterns.
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgb(34, 33, 33)",
                  maxWidth: "480px",
                  marginBottom: "20px",
                  padding: "20px",
                  fontFamily: "monospace",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "monospace",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "1.3rem",
                      color: "#d1cece",
                      fontFamily: "monospace",
                    }}
                  >
                    The Moon
                  </h1>
                  <div>
                    <img
                      src="/svg/fullmoon.svg"
                      height={25}
                      width={25}
                      alt="moon"
                    />
                  </div>
                  <br />
                  <span style={{ color: "#d1cece", fontFamily: "monospace" }}>
                    Our Emotions, Sensitivity, and Subconscious.
                  </span>
                </div>

                <div
                  style={{
                    color: "#d1cece",
                    textAlign: "left",
                    marginTop: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  <strong>The Moon</strong> represents our inner psyche and
                  emotional nature. Some astrologers say that the Sun is how we
                  see our selfs, while the Moon is who we really are. It is the
                  emotional backdrop for all that we do, ruling our instincts
                  and vulnerability.
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgb(34, 33, 33)",
                  maxWidth: "480px",
                  marginBottom: "20px",
                  padding: "20px",
                  fontFamily: "monospace",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "monospace",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "1.3rem",
                      color: "#d1cece",
                      fontFamily: "monospace",
                    }}
                  >
                    The Ascendant
                  </h1>
                  <div>
                    <img
                      src="/svg/ascendant.svg"
                      height={25}
                      width={25}
                      alt="ascendant"
                    />
                  </div>
                  <br />
                  <span style={{ color: "#d1cece", fontFamily: "monospace" }}>
                    Our Outermost Layer, First Impression,
                    <br />
                    and Physical Appearance
                  </span>
                </div>

                <div
                  style={{
                    color: "#d1cece",
                    textAlign: "left",
                    marginTop: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  <strong>Our Ascendant</strong>, or Rising Sign, describes our
                  outermost layer and how we make a first impression, so how
                  others see us. It tells us about the mask we wear and the more
                  superficial aspects of ourselves.
                </div>
              </div>
            </More>
          </Content>
          <Section>
            <h1>The Houses</h1>
            <StyledDiv>
              <p>
                The twelve houses represent twelve categories of life that orig-
                inated over two thousand years ago, in the Babylonian times. The
                Babylonians believed that life consisted of a range of
                activities and domains where we apply ourselves, each
                correlating with a particu- lar house. Money, creativity,
                marriage, career, and spirituality were all included in these
                categories. On a literal level, the houses represent positions
                in the sky. The first house begins at the easternmost horizon at
                the time of our birth. Let&apos;s consider a certain planet-the Moon.
                Where was the Moon in the sky at the moment we were born? Was it
                over our heads? To the east? If the Moon were on the easternmost
                horizon or just below it, that means it would fall in our first
                house.
              </p>
              <Div>
                <Image
                  src="/images/houses.png"
                  alt="zodiac"
                  width={500}
                  height={500}
                />
              </Div>
            </StyledDiv>
          </Section>
          <SectionPlanets>
            <h1>The Planets</h1>
            <StyledDiv>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  margin: "15px",
                }}
              >
                Inner Planets
              </h2>
              <p>
                Also known as the personal planets, these celestial bodies orbit
                closest to Earth and represent the main facets of our basic
                personality-specifically our minds, our love nature, and our
                drives.{" "}
                <strong>
                  Mercury rules the mind, intellect, and communication; Venus
                  rules our love nature, values, and creativity; and Mars rules
                  our physical exertion, attractions, and sexuality.
                </strong>{" "}
                fies. Someone with Mercury in Gemini would be witty and
                intellectual, with an agile mind and a strong ability to
                communicate. Venus in Libra reveals a proclivity for art and
                romance- a flirtatious and aesthetically sensitive soul.
              </p>
              <Div>
                <Image
                  src="/images/venus.png"
                  alt="zodiac"
                  width={350}
                  height={350}
                />
              </Div>
            </StyledDiv>
            <StyledDiv>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  margin: "15px",
                }}
              >
                Social Planets
              </h2>
              <p>
                Less personal than the inner planets, they represent how we
                relate to the world at large.{" "}
                <strong>
                  Saturn rules government, traditions, and society, representing
                  contraction and limitation, while Jupiter rules religion,
                  philosophy, and humor, representing expansion and limitless
                  possibilities.
                </strong>
              </p>
              <Div>
                <Image
                  src="/images/jupiter.png"
                  alt="zodiac"
                  width={400}
                  height={400}
                />
              </Div>
            </StyledDiv>
            <StyledDiv>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  margin: "15px",
                }}
              >
                Outer Planets
              </h2>
              <p>
                These planets are so far away from Earth, they are invisible to
                the human eye. They represent the most esoteric aspects of
                ourselves-the invisible qualities of life that push us outside
                our comfort zone and into the sublime.
                <strong>
                  Uranus rules intuition and the future; Neptune rules healing
                  and spirituality; and Pluto is power and transformation.
                </strong>{" "}
                In other terms, Uranus is the occultist, Neptune is the mystic,
                and Pluto the shaman. They are all magical in different ways,
                bringing us depth and dimensionality.
              </p>
              <Div>
                <Image
                  src="/images/pluto.png"
                  alt="zodiac"
                  width={300}
                  height={300}
                />
              </Div>
            </StyledDiv>
          </SectionPlanets>

          <Content>
            <h1
              style={{
                color: "white",
                padding: "25px",
                fontFamily: "monospace",
              }}
            >
              Meaning of the Houses
            </h1>
            <StyledTable>
              <thead>
                <tr>
                  <th>House</th>
                  <th>Meaning</th>
                  <th>Natural Ruler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st House</td>
                  <td>Self, identity, appearance, personal beginnings.</td>
                  <td>Aries</td>
                </tr>
                <tr>
                  <td>2nd House</td>
                  <td>
                    Possessions, values, material security, personal resources.
                  </td>
                  <td>Taurus</td>
                </tr>
                <tr>
                  <td>3rd House</td>
                  <td>Communication, intellect, early education, siblings.</td>
                  <td>Gemini</td>
                </tr>
                <tr>
                  <td>4th House</td>
                  <td>Home, family, roots, inner emotions, private life.</td>
                  <td>Cancer</td>
                </tr>
                <tr>
                  <td>5th House</td>
                  <td>Creativity, romance, children, self-expression.</td>
                  <td>Leo</td>
                </tr>
                <tr>
                  <td>6th House</td>
                  <td>
                    Health, work, service, daily routines, responsibilities.
                  </td>
                  <td>Virgo</td>
                </tr>
                <tr>
                  <td>7th House</td>
                  <td>Partnerships, marriage, one-on-one relationships.</td>
                  <td>Libra</td>
                </tr>
                <tr>
                  <td>8th House</td>
                  <td>
                    Transformation, death, rebirth, shared resources, intimacy.
                  </td>
                  <td>Scorpio</td>
                </tr>
                <tr>
                  <td>9th House</td>
                  <td>Philosophy, travel, higher education, spirituality.</td>
                  <td>Sagittarius</td>
                </tr>
                <tr>
                  <td>10th House</td>
                  <td>Career, social status, public reputation, ambitions.</td>
                  <td>Capricorn</td>
                </tr>
                <tr>
                  <td>11th House</td>
                  <td>Friendships, social groups, aspirations, community.</td>
                  <td>Aquarius</td>
                </tr>
                <tr>
                  <td>12th House</td>
                  <td>
                    Subconscious, secrets, spirituality, hidden enemies,
                    self-undoing.
                  </td>
                  <td>Pisces</td>
                </tr>
              </tbody>
            </StyledTable>
            <Section>
              <h1>The Natal Chart</h1>
              <StyledDiv>
                <p>
                  A natal chart, also known as a birth chart, is a snapshot of
                  the cosmos at the exact moment of your birth, offering a
                  unique, personal blueprint of your life&apos;s energies. This chart
                  integrates the positions of the{" "}
                  <strong>Sun, Moon, and Ascendant</strong>—each symbolizing
                  core aspects of your personality—with the{" "}
                  <strong>twelve houses</strong> that represent key life areas
                  like identity, relationships, career, and spirituality.{" "}
                  <strong>The planets</strong> influence different dimensions of
                  your inner and outer worlds, from the personal impact of the
                  inner planets (Mercury, Venus, Mars), to the broader societal
                  influences of the social planets (Jupiter, Saturn), and the
                  deeper, transformative energies of the outer planets (Uranus,
                  Neptune, Pluto). Each planet’s placement in a particular
                  zodiac sign and house adds layers to your personal story,
                  shaping how you express yourself, relate to others, and
                  navigate life&apos;s challenges. The zodiac signs themselves imbue
                  each area of life with distinct traits and characteristics. By
                  understanding your natal chart, you gain a profound awareness
                  of the cosmic forces that influence your journey, allowing you
                  to align more deeply with your personal growth and purpose.
                </p>
                <Div>
                  <Image
                    src="/images/natal.png"
                    alt="zodiac"
                    width={400}
                    height={400}
                  />
                </Div>
              </StyledDiv>
              <Link href="/chart">
                <Button>Get your Natal Chart</Button>
              </Link>
            </Section>
          </Content>
        </Wrapper>
      </Layout>
    </>
  );
}
const SectionPlanets = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px;
  margin-top: -94px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f7f7f7;
  ${media("<=tablet")} {
    padding: 40px;
  }
`;

const StyledDivTwo = styled.div`
  max-width: 480px;
  letter-spacing: 0;
  color: #141414;
  text-align: left !important;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  position: relative;

  font-size: 100%;
  vertical-align: baseline;

  width: 100%;
  padding: 10px 0 25px 0;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const More = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3rem;
  margin-bottom: 2rem;
  padding: 20px;
  ${media("<=tablet")} {
    flex-direction: column;
    margin: 30px;
  }
  ${media("<=desktop")} {
    flex-direction: column;
    margin: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(34, 33, 33);
  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    li {
      list-style: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const StyledDiv = styled.div`
  max-width: 480px;
  letter-spacing: 0;
  color: #141414;
  text-align: left !important;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  border-top: 0.5px solid #c7c7c7;
  font-size: 100%;
  vertical-align: baseline;

  width: 100%;
  padding: 10px 0 25px 0;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  flex-direction: column;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f7f7f7;
  ${media("<=tablet")} {
    padding: 40px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }
`;
const StyledTable = styled.table`
  padding: 10px;
  margin-bottom: 28px;
  font-size: 1.3rem;
  text-align: left;
  overflow: hidden;
  color: #ece8e2;
  font-weight: 100;

  thead {
    background-color: rgb(34, 33, 33);
    color: white;
    font-size: 18px;
  }

  th,
  td {
    padding: 8px;
    border: 0.5px solid #ddd;
    background-color: rgb(34, 33, 33);
    font-size: small;
    font-family: monospace;
  }

  tbody tr:nth-child(even) {
    background-color: rgb(34, 33, 33);
  }

  th {
    font-weight: lighter;
  }
`;
