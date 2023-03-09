import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchMonsters } from "../../resources/lib/dnd-api";

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
    cursor: pointer;
  `;

  return (
    <>
      <main>
        <Heading>Bestiary</Heading>
        <Link href="/">
          <button>Home</button>
        </Link>
        <MonsterList>
          {monsters.map((monsterName) => (
            <MonsterName key={monsterName}>
              <div>{monsterName}</div>
            </MonsterName>
          ))}
        </MonsterList>
        {console.log(`${monsters.length} monsters listed`)}
      </main>
    </>
  );
}
