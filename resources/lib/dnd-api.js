export async function fetchMonsters() {
  const startTime = performance.now();
  const response = await fetch("https://www.dnd5eapi.co/api/monsters");
  const data = await response.json();

  const monsterNames = data.results.map((monster) => monster.name);

  const endTime = performance.now();
  console.log(`Fetching monsters took ${endTime - startTime} milliseconds.`);

  return monsterNames;
}

// The Code above was partially taken from "bagelbits" one of the creators of the API and partially from various forums on the internet.

export async function fetchSpells() {
  const response = await fetch("https://www.dnd5eapi.co/api/spells");
  const data = await response.json();
  return data.results;
}

export async function fetchRules() {
  const response = await fetch("https://www.dnd5eapi.co/api/rules");
  const data = await response.json();
  return data.results;
}
