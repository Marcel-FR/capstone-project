import { useRouter } from "next/router";
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
  AbilitiesDesciption,
  ActionsDescription,
  LegendaryActions
} from "@/components/bestiaryForm/formFunctions";
import {
  CloseIcon,
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
  Actions,
  ActionsH3,
  ActionsP
} from "@/components/bestiaryPage/informationPageStyling";
import { StatSelection, StatBlockForm } from "@/components/bestiaryForm/formFunctionsStyling";

export default function MonsterCreation({onAddFormData}) {
  const router = useRouter();

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formElements = form.elements;
  const data = {
    index:formElements.name.value,
    name:formElements.name.value, 
    size:formElements.size.value, 
    type:formElements.type.value, armor_class:formElements.armor_class.value, hit_points:formElements.hit_points.value, speed:formElements.speed.value, strength:formElements.strength.value, dexterity:formElements.dexterity.value, constitution:formElements.constitution.value, intelligence:formElements.intelligence.value,
    wisdom:formElements.wisdom.value, 
    charisma:formElements.charisma.value, 
    damage_immunities:formElements.damage_immunities.value, 
    damage_vulnerabilities:formElements.damage_vulnerabilities.value,
    damage_resistances:formElements.damage_resistances.value,
    condition_immunities:formElements.condition_immunities.value,
    senses:formElements.senses.value,
    languages:formElements.languages.value,
    challenge_rating:formElements.challenge_rating.value,
    special_abilities:formElements.special_abilities.value, 
    actions:formElements.actions.value,
    legendary_actions:formElements.legendary_actions.value};
  onAddFormData(data);
  form.reset();
  formElements.name.focus();
  router.push('/bestiary');
}

  return (
    <StatBlockForm onSubmit={handleFormSubmit} action="/bestiary">
      <OrangeBorder />
      <CreatureHeadingH1>
        <Name />
      </CreatureHeadingH1>
      <CreatureHeadingH2>
        <StatSelection name="size">
          <SizeOptions />
        </StatSelection>
        <StatSelection name="type">
          <TypeOptions />
        </StatSelection>
        <StatSelection name="alignment">
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
          <AbilitiesDesciption />
        </PropertyBlockP>
      </PropertyBlock>

      <Actions>
        <ActionsH3>Actions</ActionsH3>
          <ActionsP>
            <ActionsDescription />
          </ActionsP>
      </Actions>

      <Actions>
      <ActionsH3>Legendary Actions</ActionsH3>
      <ActionsP>
        The monster can take 3 legendary actions, choosing from the options
        below. Only one legendary action can be used at a time and only at the
        end of another creature&apos;s turn. The monster regains spent legendary
        actions at the start of its turn.
      </ActionsP>
        <ActionsP>
          <LegendaryActions />
        </ActionsP>
    </Actions>

    <button type="submit">Submit</button>

      <OrangeBorderBottom />
    </StatBlockForm>
  );
}
