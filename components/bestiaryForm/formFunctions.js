import {
  TitleInput,
  FirstStatBlock,
  SecondStatBlock,
  ThirdStatBlock,
  ChallengeStatblock,
} from "./formFunctionsStyling";

export function SizeOptions() {
  return (
    <>
      <option value="" disabled selected>
        Size
      </option>
      <option value="tiny">Tiny</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="huge">Huge</option>
      <option value="gargantuan">Gargantuan</option>
    </>
  );
}

export function TypeOptions() {
  return (
    <>
      <option value="" disabled selected>
        Type
      </option>
      <option value="aberration">Aberration</option>
      <option value="beast">Beast</option>
      <option value="celestial">Celestial</option>
      <option value="construct">Construct</option>
      <option value="dragon">Dragon</option>
      <option value="elemental">Elemental</option>
      <option value="fey">Fey</option>
      <option value="fiend">Fiend</option>
      <option value="giant">Giant</option>
      <option value="humanoid">Humanoid</option>
      <option value="monstrosity">Monstrosity</option>
      <option value="ooze">Ooze</option>
      <option value="plant">Plant</option>
      <option value="undead">Undead</option>
    </>
  );
}

export function AlignmentOptions() {
  return (
    <>
      <option value="" disabled selected>
        Alignment
      </option>
      <option value="lawful-good">Lawful Good</option>
      <option value="neutral-good">Neutral Good</option>
      <option value="chaotic-good">Chaotic Good</option>
      <option value="lawful-neutral">Lawful Neutral</option>
      <option value="true-neutral">True Neutral</option>
      <option value="chaotic-neutral">Chaotic Neutral</option>
      <option value="lawful-evil">Lawful Evil</option>
      <option value="neutral-evil">Neutral Evil</option>
      <option value="chaotic-evil">Chaotic Evil</option>
      <option value="unaligned">Unaligned</option>
    </>
  );
}

export function Name() {
  return (
    <>
      <TitleInput
        placeholder="Monster Name"
        type="text"
        name="name"
        required
        maxLength={25}
      />
    </>
  );
}

export function AC() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. 10 (dex)"
        type="text"
        name="armor_class"
        required
        maxLength={15}
      />
    </>
  );
}

export function HP() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. 9 (2d8)"
        type="text"
        name="hit_points"
        required
        maxLength={15}
      />
    </>
  );
}

export function Speed() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. 30ft., fly 60ft., ..."
        type="text"
        name="speed"
        required
        maxLength={25}
      />
    </>
  );
}

export function STR() {
  return (
    <>
      <SecondStatBlock
        placeholder="10"
        type="number"
        name="strength"
        required
        max="99"
        min="-99"
      />
    </>
  );
}

export function DEX() {
  return (
    <>
      <SecondStatBlock
        placeholder="10"
        type="number"
        name="dexterity"
        required
        max="99"
        min="-99"
      />
    </>
  );
}

export function CON() {
  return (
    <>
      <SecondStatBlock
        placeholder="10"
        type="number"
        name="constitution"
        required
        max="99"
        min="-99"
      />
    </>
  );
}

export function INT() {
  return (
    <>
      <SecondStatBlock
        placeholder="10"
        type="number"
        name="intelligence"
        required
        max="99"
        min="-99"
      />
    </>
  );
}

export function WIS() {
  return (
    <>
      <SecondStatBlock
        placeholder="10"
        type="number"
        name="wisdom"
        required
        max="99"
        min="-99"
      />
    </>
  );
}

export function CHA() {
  return (
    <>
      <SecondStatBlock
        placeholder="10"
        type="number"
        name="charisma"
        required
        max="99"
        min="-99"
      />
    </>
  );
}

export function DamageImmunities() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. poison, ..."
        type="text"
        name="damage_immunities"
        maxLength={25}
      />
    </>
  );
}
export function DamageVulnerabilities() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. lightning, ..."
        type="text"
        name="damage_vulnerabilities"
        maxLength={25}
      />
    </>
  );
}
export function DamageResistances() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. piercing, ..."
        type="text"
        name="damage_resistances"
        maxLength={25}
      />
    </>
  );
}
export function ConditionImmunities() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. Charmed, ..."
        type="text"
        name="condition_immunities"
        maxLength={25}
      />
    </>
  );
}

export function Senses() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. darkvision 60ft., ..."
        type="text"
        name="senses"
        required
        maxLength={25}
      />
    </>
  );
}

export function Languages() {
  return (
    <>
      <FirstStatBlock
        placeholder="e.g. Common, ..."
        type="text"
        name="languages"
        required
        maxLength={25}
      />
    </>
  );
}

export function Challenge() {
  return (
    <>
      <ChallengeStatblock
        placeholder="e.g. 0.25"
        type="text"
        name="challenge_rating"
        required
        pattern="[0-9\.]+"
        maxLength={5}
      />
    </>
  );
}

export function XPInput() {
  return (
    <>
      <ChallengeStatblock
        placeholder="e.g. (50 XP)"
        type="number"
        name="xp"
        required
        max="1000000"
        min="0"
      />
    </>
  );
}

export function AbilitiesDesciption() {
  return (
    <>
      <ThirdStatBlock
        placeholder="e.g. Amphibious: The creature can breathe ..."
        type="text"
        name="special_abilities"
        maxLength={400}
      />
    </>
  );
}

export function ActionsDescription() {
  return (
    <>
      <ThirdStatBlock
        placeholder="e.g. Multiattack: The creature makes three ..."
        type="text"
        name="actions"
        maxLength={400}
      />
    </>
  );
}

export function LegendaryActions() {
  return (
    <>
      <ThirdStatBlock
        placeholder="e.g. Psychic drain: One creature charmed ..."
        type="text"
        name="legendary_actions"
        maxLength={400}
      />
    </>
  );
}
