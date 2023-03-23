import { getArmorClass, getSpeed, getSenses, getDamageVulnerabilities, getDamageResistances, getDamageImmunities, getConditionImmunities, getMonsterActions, getSpecialAbilities, getLegendaryActions } from "./informationPageFunctions";

export default function InformationPage(props) {
  const { monster } = props;

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
      <span>{getDamageVulnerabilities(monster)} </span>
      </div>

      <div>
      <span>{getDamageResistances(monster)} </span>
      </div>

      <div>
      <span>{getDamageImmunities(monster)} </span>
      </div>

      <div>
        <span>{getConditionImmunities(monster)} </span>
      </div>

      <div>
        <span>{getSpecialAbilities(monster)}</span>
      </div>

      <div>
        <span>{getMonsterActions(monster)}</span>
      </div>

      <div>
        <span>{getLegendaryActions(monster)}</span>
      </div>
    </div>
  );
}

/* <div>
<span>{getMonsterImage(monster)}</span>
</div> */