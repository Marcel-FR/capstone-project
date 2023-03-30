const spells = require("../../resources/lib/5e-SRD-Spells.json");

export default function SpellsInformationPage({ spell }) {
  return (
    <>
      <div key={spell?.index}>
        <h4>{spell?.name}</h4>
        <p>{spell?.desc.join(" ")}</p>
        <p>{spell?.higher_level}</p>
        <p>
          Range: {spell?.range} {spell?.attack_type}
        </p>
        <p>Components: {spell?.components.join(", ")}</p>
        <p>Material: {spell?.material}</p>
        <p>
          Duration: {spell?.duration} {spell?.ritual}
        </p>
        <p>Concentration: {spell?.concentration}</p>
        <p>Casting Time: {spell?.casting_time}</p>
        <p>Level: {spell?.level}</p>
        <p>School: {spell?.school.name}</p>
      </div>
    </>
  );
}
