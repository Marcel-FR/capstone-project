import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import Scrollbars from "react-custom-scrollbars-2";
import {
  MonsterName,
  MonsterCR,
  MonsterDetails,
  MonsterType,
} from "../../components/bestiaryPage/indexStyling";

export default function BestiaryPage({ data, monsterData }) {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = (id) => {
    router.push(`/bestiary/${id}`);
  };

  return (
    <>
      <Header pageTitle={"Bestiary"} />
      <Scrollbars
        style={{ width: "100%", height: "calc(100vh - 90px)" }}
        universal
        onScroll={(e) => setScrollPosition(e.target.scrolltop)}
        scrolltop={scrollPosition}
      >
        {monsterData?.map((monster) => (
          <MonsterName
            key={monster.index}
            onClick={() => handleClick(monster.index)}
          >
            <div>{monster.name}</div>
            <MonsterDetails>
              <MonsterType>{monster.type}</MonsterType>
              <MonsterCR>CR: {monster.challenge_rating}</MonsterCR>
            </MonsterDetails>
          </MonsterName>
        ))}
      </Scrollbars>
    </>
  );
}

// The knowledge of how the custom scrollbars work comes from the react-custom-scrollbars-2 documentation => https://www.npmjs.com/package/react-custom-scrollbars-2