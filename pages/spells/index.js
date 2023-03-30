import { SpellHeader } from "../../components/header/Header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  SpellName,
  SpellDetails,
  SpellLevel,
  SpellSchool,
} from "../../components/spellsPage/indexStyling";

export default function SpellsPage({ spells }) {
  const [spellsList, setSpellsList] = useState(spells);
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = (id) => {
    router.push(`/spells/${id}`);
  };

  spellsList.sort((a, b) => a.level - b.level);

  return (
    <>
      <SpellHeader pageTitle={"Spellbook"} />
      <Scrollbars
        style={{ width: "100%", height: "calc(100vh - 90px)" }}
        universal
        onScroll={(e) => setScrollPosition(e.target.scrolltop)}
        scrolltop={scrollPosition}
      >
        {spellsList.map((spell) => (
          <SpellName key={spell.index} onClick={() => handleClick(spell.index)}>
            <div>{spell.name}</div>
            <SpellDetails>
              <SpellSchool>{spell.school.name}</SpellSchool>
              <SpellLevel>Level: {spell.level}</SpellLevel>
            </SpellDetails>
          </SpellName>
        ))}
      </Scrollbars>
    </>
  );
}
