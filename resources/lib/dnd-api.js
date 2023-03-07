export async function fetchMonsters() {
  const response = await fetch("https://www.dnd5eapi.co/api/monsters");
  const data = await response.json();

  const monsters = await Promise.all(
    data.results.map(async (monster) => {
      const response = await fetch(`https://www.dnd5eapi.co${monster.url}`);
      const data = await response.json();
      return { 
        name: monster.name, 
        challenge_rating: data.challenge_rating, 
        type: data.type 
      };
    })
  );

  return monsters;
}

// The Code above was partially taken from "bagelbits" one of the creators of the API and partially from different forums on the internet.

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