import { D20 } from "@/components/svgStyles/svgFiles";
import { Heading, Ring, StyledBestiaryLink, StyledSpellbookLink } from "@/components/home/homescreenStyling";

export default function Home() {
  return (
    <>
      <Heading>
        Delver&apos;s <br /> Guide
      </Heading>
      <Ring color="#ac2023" />
      <D20 />
      <StyledBestiaryLink href="/bestiary"></StyledBestiaryLink>
      <StyledSpellbookLink href="/spells"></StyledSpellbookLink>
    </>
  );
}