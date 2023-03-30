import { useRouter } from "next/router";
import InformationPage from "../../components/bestiaryPage/informationPage";

export default function BestiaryIdPage({ monsterData, onDeleteMonster }) {
  const router = useRouter();
  const { id } = router.query;

  const currentMonster = monsterData.find((monster) => monster.index === id);

  return (
    <>
      <InformationPage
        monster={currentMonster}
        onDeleteMonster={onDeleteMonster}
      />
    </>
  );
}
