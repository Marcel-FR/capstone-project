import {
  getArmorClass,
  getSpeed,
  getSenses,
  getLanguages,
  getDamageVulnerabilities,
  getDamageResistances,
  getDamageImmunities,
  getConditionImmunities,
  getMonsterActions,
  getSpecialAbilities,
  getLegendaryActions,
} from "./informationPageFunctions";
import {
  StatBlock,
  OrangeBorder,
  OrangeBorderBottom,
  CreatureHeadingH1,
  CreatureHeadingH2,
  PropertyLine,
  PropertyLineP,
  PropertyLineH4,
  PropertyBlock,
  PropertyBlockP,
  Abilities,
  AbilitiesDiv,
  AbilitiesH4,
  AbilitiesP,
  SeparationLine,
} from "./informationPageStyling";
import { BackArrow2 } from "./informationPageStyling";
import { useRouter } from "next/router";

export default function InformationPage({ monster }) {
  const router = useRouter();
  return (
    <StatBlock>
      <OrangeBorder />
      <CreatureHeadingH1>{monster.name}</CreatureHeadingH1>
      <CreatureHeadingH2>
        {monster.size} {monster.type}, {monster.alignment}
      </CreatureHeadingH2>
      <BackArrow2 onClick={() => router.push("/bestiary")} />
      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <PropertyLine>
        <PropertyLineH4>Armor Class </PropertyLineH4>
        <PropertyLineP>{getArmorClass(monster)}</PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Hit Points</PropertyLineH4>
        <PropertyLineP>
          {" "}
          {monster.hit_points}{" "}
          {monster.hit_dice && <span>({monster.hit_dice})</span>}
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Speed</PropertyLineH4>
        <PropertyLineP> {getSpeed(monster)}</PropertyLineP>
      </PropertyLine>

      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <Abilities>
        <AbilitiesDiv>
          <AbilitiesH4>STR</AbilitiesH4>
          <AbilitiesP>{monster.strength}</AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>DEX</AbilitiesH4>
          <AbilitiesP>{monster.dexterity}</AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>CON</AbilitiesH4>
          <AbilitiesP>{monster.constitution}</AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>INT</AbilitiesH4>
          <AbilitiesP>{monster.intelligence}</AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>WIS</AbilitiesH4>
          <AbilitiesP>{monster.wisdom}</AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>CHA</AbilitiesH4>
          <AbilitiesP>{monster.charisma}</AbilitiesP>
        </AbilitiesDiv>
      </Abilities>

      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <>{getDamageImmunities(monster)}</>
      <>{getDamageVulnerabilities(monster)}</>
      <>{getDamageResistances(monster)}</>
      <>{getConditionImmunities(monster)}</>

      <PropertyLine>
        <PropertyLineH4>Senses</PropertyLineH4>
        <PropertyLineP> {getSenses(monster)}</PropertyLineP>
      </PropertyLine>

      <PropertyLine>
        <PropertyLineH4>Languages</PropertyLineH4>
        <PropertyLineP> {getLanguages(monster)}</PropertyLineP>
      </PropertyLine>

      <PropertyLine>
        <PropertyLineH4>Challenge</PropertyLineH4>
        <PropertyLineP>
          {" "}
          {monster.challenge_rating} ({monster.xp} XP)
        </PropertyLineP>
      </PropertyLine>

      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <PropertyBlock>
        <PropertyBlockP>{getSpecialAbilities(monster)}</PropertyBlockP>
      </PropertyBlock>

      <>{getMonsterActions(monster)}</>

      <>{getLegendaryActions(monster)}</>

      <OrangeBorderBottom />
    </StatBlock>
  );
}
