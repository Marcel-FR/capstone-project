import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.a`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ccc;
  text-decoration: none;
  color: #333;
`;

export default function Home() {
  return (
    <>
      <main>
        <Heading>Home</Heading>
      </main>
      <Link href="/bestiary">Bestiary</Link>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
