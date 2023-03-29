import styled from "styled-components";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";

const MonsterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MonsterName = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid transparent;
  width: 100%;
  padding: 10px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;

  .monster-details {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .monster-type {
      font-style: italic;
      font-size: 0.8rem;
    }

    .monster-cr {
      font-weight: bold;
      font-size: 1.2rem;
      margin-left: auto;
    }
  }
`;

// The styled components were partially taken from StackOverflow

export default function BestiaryPage({ data, monsterData }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/bestiary/${id}`);
  };

  return (
    <>
      <main>
        <Header pageTitle={"Bestiary"} />
        <MonsterList>
          {monsterData?.map((monster) => (
            <MonsterName
              key={monster.index}
              onClick={() => handleClick(monster.index)}
            >
              <div>{monster.name}</div>
              <div className="monster-details">
                <div className="monster-type">{monster.type}</div>
                <div className="monster-cr">CR: {monster.challenge_rating}</div>
              </div>
            </MonsterName>
          ))}
        </MonsterList>
      </main>
    </>
  );
}
