import styled from "styled-components";
import React from "react";
import {
  SizeOptions,
  TypeOptions,
  AlignmentOptions,
  Name,
  AC,
  HP,
  Speed,
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA,
  Senses,
  Languages,
  Challenge,
  DamageImmunities,
  DamageVulnerabilities,
  DamageResistances,
  ConditionImmunities,
  AbilitiesTitle,
  AbilitiesDesciption,
} from "@/components/bestiaryForm/formFunctions";
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
} from "@/components/bestiaryPage/informationPageStyling";
import { StatSelection } from "@/components/bestiaryForm/formFunctionsStyling";
import { CloseIcon } from "@/components/bestiaryPage/informationPageStyling";
import { useRouter } from "next/router";

export default function MonsterCreation() {
  const router = useRouter();
  return (
    <StatBlock>
      <OrangeBorder />
      <CreatureHeadingH1>
        <Name />
      </CreatureHeadingH1>
      <CreatureHeadingH2>
        <StatSelection>
          <SizeOptions />
        </StatSelection>
        <StatSelection>
          <TypeOptions />
        </StatSelection>
        <StatSelection>
          <AlignmentOptions />
        </StatSelection>
      </CreatureHeadingH2>
      <CloseIcon onClick={() => router.push("/bestiary")} />

      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <PropertyLine>
        <PropertyLineH4>Armor Class </PropertyLineH4>
        <PropertyLineP>
          {" "}
          <AC />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Hit Points</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <HP />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Speed</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <Speed />
        </PropertyLineP>
      </PropertyLine>

      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <Abilities>
        <AbilitiesDiv>
          <AbilitiesH4>STR</AbilitiesH4>
          <AbilitiesP>
            <STR />
          </AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>DEX</AbilitiesH4>
          <AbilitiesP>
            <DEX />
          </AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>CON</AbilitiesH4>
          <AbilitiesP>
            <CON />
          </AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>INT</AbilitiesH4>
          <AbilitiesP>
            <INT />
          </AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>WIS</AbilitiesH4>
          <AbilitiesP>
            <WIS />
          </AbilitiesP>
        </AbilitiesDiv>
        <AbilitiesDiv>
          <AbilitiesH4>CHA</AbilitiesH4>
          <AbilitiesP>
            <CHA />
          </AbilitiesP>
        </AbilitiesDiv>
      </Abilities>

      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <PropertyLine>
        <PropertyLineH4>Damage Immunities</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <DamageImmunities />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Damage Vulnerabilities</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <DamageVulnerabilities />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Damage Resistances</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <DamageResistances />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Condition Immunities</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <ConditionImmunities />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Senses</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <Senses />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Languages</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <Languages />
        </PropertyLineP>
      </PropertyLine>
      <PropertyLine>
        <PropertyLineH4>Challenge</PropertyLineH4>
        <PropertyLineP>
          {" "}
          <Challenge />
        </PropertyLineP>
      </PropertyLine>

      <SeparationLine>
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </SeparationLine>

      <PropertyBlock>
        <PropertyBlockP>
          <AbilitiesTitle />
        </PropertyBlockP>
      </PropertyBlock>
      <PropertyBlock>
        <PropertyBlockP>
          <AbilitiesDesciption />
        </PropertyBlockP>
      </PropertyBlock>

      <button type="submit">Submit</button>

      <OrangeBorderBottom />
    </StatBlock>
  );
}
