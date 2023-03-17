import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import MonsterHeader from "@/components/bestiaryPage/monsterHeader";
import StatsTable from "@/components/bestiaryPage/statsTable";

const Monsters = require("../../resources/lib/5e-SRD-Monsters.json");

export default function BestiaryIdPage() {
  const [monsterData, setMonsterData] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const selectedMonster = Monsters.find((monster) => monster.index === id);
    setMonsterData(selectedMonster || {});
  }, [id]);

return (
    <>
      <MonsterHeader monster={monsterData} />
      <StatsTable monster={monsterData} />
    </>
  );
}