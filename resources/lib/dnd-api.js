export async function fetchMonsters() {
  const response = await fetch("https://www.dnd5eapi.co/api/monsters");
  const data = await response.json();
  return data.results;
}
// The Code above was from "bagelbits" one of the creators of the API. I understand it now though.

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