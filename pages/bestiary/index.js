import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";

const monsters = require("../../resources/lib/5e-SRD-Monsters.json");

export default function BestiaryPage() {
  const [monstersList, setMonstersList] = useState([]);

  useEffect(() => {
    setMonstersList(monsters);
  }, []);

  // The useEffect code above was partially taken from stackoverflow

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
          {monstersList.map((monster) => (
            <MonsterName key={monster.index}>
              <div>{monster.name}</div>
            </MonsterName>
          ))}
        </MonsterList>
        {console.log(`${monstersList.length} monsters listed`)}
      </main>
    </>
  );
}
