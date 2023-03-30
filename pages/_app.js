import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

const monsters = require("/resources/lib/5e-SRD-Monsters.json");
const spells = require("../resources/lib/5e-SRD-Spells.json");

export default function App({ Component, pageProps }) {
  const [monsterData, setMonsterData] = useLocalStorageState("monsterData", {
    defaultValue: monsters,
  });
  const [formData, setFormData] = useLocalStorageState("formData", {
    defaultValue: [],
  });
  function handleAddFormData(newFormData) {
    setFormData(newFormData);
    setMonsterData([...monsterData, newFormData]);
  }

  function handleDeleteMonster(id) {
    setMonsterData(monsterData.filter((monster) => monster.id !== id));
    console.log(monsterData);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Delver&apos;s Guide</title>
      </Head>
      {monsterData ? (
        <Component
          {...pageProps}
          data={formData}
          onAddFormData={handleAddFormData}
          monsterData={[...monsterData].sort((a, b) =>
            a.name.localeCompare(b.name)
          )}
          onDeleteMonster={handleDeleteMonster}
          spells={spells}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
