import {
  PropertyLineH4,
  PropertyLine,
  PropertyLineP,
  Actions,
  ActionsH3,
  ActionsP,
} from "./informationPageStyling";

export function getArmorClass(monster) {
  if (!monster?.armor_class?.length) return "";
  const { value = "", type = "" } = monster.armor_class[0] || {};
  return `${value}${type ? ` (${type})` : ""}`;
}

export function getLanguages(monster) {
  if (!monster.languages) {
    return <span>Cannot understand any language</span>;
  }

  return <span>{monster.languages}</span>;
}

export function getSpeed(monster) {
  const { walk = "", swim = "", fly = "", hover = "" } = monster.speed || {};
  let speedString = "Speed: ";

  if (walk) {
    speedString += `${walk}`;
    if (swim || fly || hover) speedString += ", ";
  }
  if (fly) {
    speedString += `fly ${fly}`;
    if (swim || hover) speedString += ", ";
  }
  if (swim) {
    speedString += `swim ${swim}`;
    if (hover) speedString += ", ";
  }
  if (hover === true) {
    speedString += "(hover)";
  } else if (hover) {
    speedString += `Hover: ${hover}`;
  }
  return speedString;
}

export function getSenses(monster) {
  if (!monster?.senses) return "";
  const senseEntries = Object.entries(monster.senses).map(([sense, value]) => {
    switch (sense) {
      case "passive_perception":
        return ["Passive Perception", value];
      default:
        return [sense, value];
    }
  });
  return senseEntries.map(([sense, value]) => `${sense}: ${value}`).join(", ");
}

// The switch case from the code above was taken from StackOverflow

export function getDamageVulnerabilities(monster) {
  if (
    !monster.damage_vulnerabilities ||
    monster.damage_vulnerabilities.length === 0
  ) {
    return null;
  }

  return (
    <PropertyLine>
      <PropertyLineH4>Damage Vulnerabilities </PropertyLineH4>
      <PropertyLineP>
        {monster.damage_vulnerabilities
          ? monster.damage_vulnerabilities.join(", ")
          : "-"}
      </PropertyLineP>
    </PropertyLine>
  );
}

export function getDamageResistances(monster) {
  if (!monster.damage_resistances || monster.damage_resistances.length === 0) {
    return null;
  }

  return (
    <PropertyLine>
      <PropertyLineH4>Damage Resistances </PropertyLineH4>
      <PropertyLineP>
        {monster.damage_resistances
          ? monster.damage_resistances.join(", ")
          : "-"}
      </PropertyLineP>
    </PropertyLine>
  );
}

export function getDamageImmunities(monster) {
  if (!monster.damage_immunities || monster.damage_immunities.length === 0) {
    return null;
  }

  return (
    <PropertyLine>
      <PropertyLineH4>Damage Immunities </PropertyLineH4>
      <PropertyLineP>
        {monster.damage_immunities ? monster.damage_immunities.join(", ") : "-"}
      </PropertyLineP>
    </PropertyLine>
  );
}

export function getConditionImmunities(monster) {
  if (
    !monster.condition_immunities ||
    monster.condition_immunities.length === 0
  ) {
    return null;
  }

  const conditionImmunities = monster.condition_immunities.map((condition) => {
    return condition.name;
  });

  return (
    <PropertyLine>
      <PropertyLineH4>Condition Immunities </PropertyLineH4>
      <PropertyLineP>{conditionImmunities.join(", ")}</PropertyLineP>
    </PropertyLine>
  );
}

function stringifyDamage(dmg) {
  return `${dmg.damage_dice} ${dmg.damage_type ? dmg.damage_type.name : ""}`;
}

function stringifyDamageChoice(choice) {
  return choice.from.options
    .map(
      (dmg) =>
        `${dmg.damage_dice} ${dmg.damage_type.name}` +
        (dmg.notes ? ` (${dmg.notes})` : "")
    )
    .join(" or ");
}

function stringifyDamageList(actionDamage) {
  return actionDamage
    .map((dmg) =>
      dmg.choose ? stringifyDamageChoice(dmg) : stringifyDamage(dmg)
    )
    .join(" + ");
}

export function getMonsterActions({ actions = [] } = {}) {
  if (!actions.length) return "";

  return (
    <Actions>
      <ActionsH3>Actions</ActionsH3>
      {actions.map((action, index) => (
        <ActionsP key={index}>
          <h4>{action.name}</h4>
          <p>{action.desc}</p>
          {action.attack_bonus && <p>Attack Bonus: {action.attack_bonus}</p>}
          {action.dc && (
            <p>
              DC: {action.dc.dc_value} ({action.dc.dc_type.name})
            </p>
          )}
          {action.damage && <p>Damage: {stringifyDamageList(action.damage)}</p>}
        </ActionsP>
      ))}
    </Actions>
  );
}

export function getSpecialAbilities({ special_abilities = [] } = {}) {
  if (!special_abilities.length) return "";

  return (
    <div>
      {special_abilities.map((action, index) => (
        <div key={index}>
          <h4>{action.name}</h4>
          <p>{action.desc}</p>
          {action.attack_bonus && <p>Attack Bonus: {action.attack_bonus}</p>}
          {action.damage && <p>Damage: {stringifyDamageList(action.damage)}</p>}
        </div>
      ))}
    </div>
  );
}

export function getLegendaryActions({ legendary_actions = [] } = {}) {
  if (!legendary_actions.length) return "";

  return (
    <Actions>
      <ActionsH3>Legendary Actions</ActionsH3>
      <ActionsP>
        The monster can take 3 legendary actions, choosing from the options
        below. Only one legendary action can be used at a time and only at the
        end of another creature&apos;s turn. The monster regains spent legendary
        actions at the start of its turn.
      </ActionsP>
      {legendary_actions.map((action, index) => (
        <ActionsP key={index}>
          <h4>{action.name}</h4>
          <p>{action.desc}</p>
          {action.attack_bonus && <p>Attack Bonus: {action.attack_bonus}</p>}
          {action.damage && <p>Damage: {stringifyDamageList(action.damage)}</p>}
        </ActionsP>
      ))}
    </Actions>
  );
}
