import { useRouter } from "next/router";
import SpellsInformationPage from "@/components/spellsPage/spellsInformationPage.js";

export default function SpellsIdPage({ spells }) {
  const router = useRouter();
  const { id } = router.query;

  const currentSpell = spells.find((spell) => spell.index === id);

  return (
    <>
      <SpellsInformationPage spell={currentSpell} />
    </>
  );
}
