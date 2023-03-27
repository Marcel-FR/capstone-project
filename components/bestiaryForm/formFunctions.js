import { TitleInput, FirstStatBlock, SecondStatBlock } from "./formFunctionsStyling";

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
      <TitleInput placeholder="Monster Name" type="text" />
    </>
  );
}

export function AC() {
  return (
    <>
      <FirstStatBlock placeholder="10 (dex)" type="text" />
    </>
  );
}

export function HP() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. 9 (2d8)" type="text" />
    </>
  );
}

export function Speed() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. 30ft., fly 60ft., ..." type="text" />
    </>
  );
}

export function STR() {
  return (
    <>
      <SecondStatBlock placeholder="10" type="number" />
    </>
  );
}

export function DEX() {
  return (
    <>
      <SecondStatBlock placeholder="10" type="number" />
    </>
  );
}

export function CON() {
  return (
    <>
      <SecondStatBlock placeholder="10" type="number" />
    </>
  );
}

export function INT() {
  return (
    <>
      <SecondStatBlock placeholder="10" type="number" />
    </>
  );
}

export function WIS() {
  return (
    <>
      <SecondStatBlock placeholder="10" type="number" />
    </>
  );
}

export function CHA() {
  return (
    <>
      <SecondStatBlock placeholder="10" type="number" />
    </>
  );
}

export function DamageImmunities() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. poison, ..." type="text" />
    </>
  );
}
export function DamageVulnerabilities() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. lightning, ..." type="text" />
    </>
  );
}
export function DamageResistances() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. piercing, ..." type="text" />
    </>
  );
}
export function ConditionImmunities() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. Charmed, ..." type="text" />
    </>
  );
}

export function Senses() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. darkvision 60ft., ..." type="text" />
    </>
  );
}

export function Languages() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. Common, ..." type="text" />
    </>
  );
}

export function Challenge() {
  return (
    <>
      <FirstStatBlock placeholder="e.g. 0.25 (50 XP)" type="text" />
    </>
  );
}

export function AbilitiesTitle() {
  return (
    <>
      <input placeholder="e.g. Amphibious" type="text" />
    </>
  );
}

export function AbilitiesDesciption() {
  return (
    <>
      <input placeholder="The creature can breathe air and water" type="text" />
    </>
  );
}

export function Actions() {
  return (
    <>
      <input placeholder="e.g. Tail" type="text" />
    </>
  );
}
