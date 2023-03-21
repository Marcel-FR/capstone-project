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
      speedString += `Walk: ${walk === undefined ? "-" : walk}`;
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

  // The code above is a function to create a string dor the monster's speed data, which concatenates different types of speed (walking, swimming, hovering)

  function getSenses(monster) {
    if (!monster?.senses) return "";
    const senseEntries = Object.entries(monster.senses).map(
      ([sense, value]) => {
        switch (sense) {
          case "passive_perception":
            return ["Passive Perception", value];
          default:
            return [sense, value];
        }
      }
    );
    return senseEntries
      .map(([sense, value]) => `${sense}: ${value}`)
      .join(", ");
  }

  // The switch case from the code above was taken from StackOverflow

  function getConditionImmunities(monster) {
    if (!monster?.condition_immunities) return "";
    const immunities = monster.condition_immunities.map((condition) => {
      return condition.name;
    });
    return `${immunities.join(", ")}`;
  }

  function getMonsterActions({ actions = [] } = {}) {
    if (!actions.length) return "";

    return (
      <div>
        {actions.map((action, index) => (
          <div key={index}>
            <h4>{action.name}</h4>
            <p>{action.desc}</p>
            {action.attack_bonus && <p>Attack Bonus: {action.attack_bonus}</p>}
            {action.dc && (
              <p>
                DC: {action.dc.dc_value} ({action.dc.dc_type.name})
              </p>
            )}
            {action.damage && (
              <p>
                Damage:{" "}
                {action.damage.map(
                  (dmg, i) =>
                    `${dmg.damage_dice} ${
                      dmg.damage_type ? dmg.damage_type.name : ""
                    }`
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div>
        <span>Armor Class: </span>
        <span>{getArmorClass(monster) || "-"}</span>
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
        <span>Languages: </span>
        <span>{monster.languages || "-"}</span>
      </div>

      <div>
        <span>Challenge Rating: </span>
        <span>{monster.challenge_rating || "-"}</span>
      </div>

      <div>
        <span>Experience: </span>
        <span>{monster.xp || "-"}</span>
      </div>

      <div>
        <span>Senses: </span>
        <span>{getSenses(monster) || "-"}</span>
      </div>

      <div>
        <span>Damage Vulnerabilities: </span>
        <span>{monster.damage_vulnerabilities || "-"}</span>
      </div>

      <div>
        <span>Damage Resistances: </span>
        <span>
          {monster.damage_resistances
            ? monster.damage_resistances.join(", ")
            : "-"}
        </span>
      </div>

      <div>
        <span>Damage Immunities: </span>
        <span>{monster.damage_immunities || "-"}</span>
      </div>

      <div>
        <span>Condition Immunities: </span>
        <span>{getConditionImmunities(monster) || "-"} </span>
      </div>

      <div>
        <span>{getMonsterActions(monster)} </span>
      </div>
    </div>
  );
}
