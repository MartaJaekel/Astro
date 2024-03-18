import Image from "next/image";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function SignCard({ sign }) {
  return (
    <>
      <Figure>
        <Image
          src={`/images/${sign?.name?.toLowerCase()}.jpeg`}
          yeah
          alt={sign?.name}
          width={200}
          height={200}
        />
        <StyledLink href={`/signs/${sign?._id}`}>
          <figcaption>{sign?.name}</figcaption>
        </StyledLink>
      </Figure>
    </>
  );
}
const Figure = styled.figure`
  border: 3px solid black;
  border-radius: 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  figcaption {
    text-align: center;
    padding: 0.5rem;
    font-family: didot;
  }
`;
