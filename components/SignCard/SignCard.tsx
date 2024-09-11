import Image from "next/image";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {Sign} from "../../types/sign";
import { useRouter } from "next/router";

export interface SignCardProps {
  sign : Sign;
}

export default function SignCard({ sign }: SignCardProps) {
  const router = useRouter();
  return (
    <>
      <Figure>
        <Image
          src={`/images/${sign?.name?.toLowerCase()}.jpeg`}
          className="rounded-md cursor-pointer"
          alt={sign?.name}
          width={100}
          height={100}
          onClick={() => {
            router.push(`/signs/${sign?._id}`);
          }}
        />
        <StyledLink href={`/signs/${sign?._id}`}>
          <figcaption>{sign?.name}</figcaption>
        </StyledLink>
      </Figure>
    </>
  );
}
const Figure = styled.figure`

 
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  figcaption {
    text-align: center;
    padding: 0.5rem;
    font-family: didot;
  }
`;
