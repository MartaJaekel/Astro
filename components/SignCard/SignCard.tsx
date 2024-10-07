import Image from "next/image";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Sign } from "../../types/sign";
import { useRouter } from "next/router";

export interface SignCardProps {
  sign: Sign;
}

export default function SignCard({ sign }: SignCardProps) {
  const router = useRouter();
  return (
    <>
      <StyledLink href={`/signs/${sign?._id}`}>
        <ImageContainer>
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
          <Overlay />
        </ImageContainer>

        <figcaption>{sign?.name}</figcaption>
      </StyledLink>
    </>
  );
}

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

const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.375rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;
