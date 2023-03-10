import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Heading>Home</Heading>
      </main>
      <Link href="/bestiary">
        <button>Bestiary</button>
      </Link>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
