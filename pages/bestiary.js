import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchMonsters } from "../resources/lib/dnd-api";

export default function BestiaryPage() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetchMonsters().then((data) => setMonsters(data));
  }, []);

  // The useEffect code above was partly taken from stackoverflow

  const Heading = styled.h1`
    text-align: center;
  `;

  const MonsterList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

const MonsterName = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
border: 2px solid transparent;
width: 100%;
padding: 10px;
text-align: left;
`;

const MonsterInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;

return (
<>
  <main>
    <Heading>Bestiary</Heading>
    <Link href="/">
      <button>Home</button>
    </Link>
    <MonsterList>
      {monsters.map((monster) => (
        <MonsterName key={monster.index}>
          <MonsterInfo>
            <div>{monster.name}</div>
            <div>{`${monster.type}`} {`CR: ${monster.challenge_rating}`}</div>
          </MonsterInfo>
        </MonsterName>
      ))}
    </MonsterList>
    {console.log(`${monsters.length} monsters listed`)}
  </main>
</>
);
}