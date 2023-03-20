export default function StatsTable(props) {
  const { monster } = props;

  function getArmorClass(monster) {
    if (!monster?.armor_class?.length) return "";
    const { value = "", type = "" } = monster.armor_class[0] || {};
    return `${value}${type ? ` (${type})` : ""}`;
  }

// The code above returns the armor class of a monster if available. If it's not available, it will return an empty string

function getSpeed(monster) {
  const { walk = "", swim = "", hover = "" } = monster.speed || {};
  let speedString = "";
  if (walk) {
    speedString += `Walk: ${walk === undefined ? '-' : walk}`;
    if (swim !== undefined || hover !== undefined) speedString += ", ";
  }
  if (swim) {
    speedString += `Swim: ${swim}`;
    if (hover) speedString += ", ";
  }
  if (hover) {
    speedString += `Hover: ${hover}`;
  }
  return speedString;
}

//The code above is a function to create a string dor the monster's speed data, which concatenates different types of speed (walking, swimming, hovering)

  return (
    <div className="stats-table">
      <div>
        <span>Armor Class: </span>
        <span>{getArmorClass(monster)}</span>
      </div>

      <div>
        <span>Hit Points: </span>
        <span>{monster.hit_points || "-"}</span>
        {monster.hit_dice && <span>({monster.hit_dice})</span>}
      </div>

      <div>
        <span>Speed: </span>
        <span>{getSpeed(monster) || "-"}</span>
      </div>

      <div>
        <span>Size: </span>
        <span>{monster.size || "-"}</span>
      </div>

      <div>
        <span>Type: </span>
        <span>{monster.type || "-"}</span>
      </div>

      <div>
        <span>Alignment: </span>
        <span>{monster.alignment || "-"}</span>
      </div>

      <div>
        <span>Strength: </span>
        <span>{monster.strength || "-"}</span>
      </div>

      <div>
        <span>Dexterity: </span>
        <span>{monster.dexterity || "-"}</span>
      </div>

      <div>
        <span>Constitution: </span>
        <span>{monster.constitution || "-"}</span>
      </div>

      <div>
        <span>Intelligence: </span>
        <span>{monster.intelligence || "-"}</span>
      </div>

      <div>
        <span>Wisdom: </span>
        <span>{monster.wisdom || "-"}</span>
      </div>

      <div>
        <span>Charisma: </span>
        <span>{monster.charisma || "-"}</span>
      </div>

      <div>
        <span>Challenge Rating: </span>
        <span>{monster.challenge_rating || "-"}</span>
      </div>
    </div>
  );
}