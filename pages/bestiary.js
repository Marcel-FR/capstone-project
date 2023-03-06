import styled from "styled-components";
import Link from "next/link";

export default function BestiaryPage() {
  return (
    <>
      <main>
        <Heading>Bestiary</Heading>
        <Link href="/">
          <button>Home</button>
        </Link>
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
