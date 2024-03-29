import styled from "styled-components";
import { BackArrowIcon, SpellBackArrowIcon, AddIcon } from "../svgStyles/svgFiles";
import { useRouter } from "next/router";

// Bestiary

const StyledHeader = styled.header`
  position: relative;
  width: 375px;
  height: 80px;
  color: #ac2023;
  background-color: #ac2023;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: #f5e5c3;
  margin: 0px 0 10px 0;
  font-size: 35px;
`;

export const Header = ({ pageTitle }) => {
  return (
    <StyledHeader>
      <BackArrowIcon />
      <StyledTitle>{pageTitle}</StyledTitle>
      <AddIcon />
    </StyledHeader>
  );
};

// Spelllist

const StyledSpellHeader = styled.header`
  position: relative;
  width: 375px;
  height: 80px;
  background-color: #20aca9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpellTitle = styled.h1`
  text-align: center;
  color: #f5e5c3;
  margin: 0px 100px 9px 0;
  font-size: 35px;
`;

const SpellBackArrow = styled(SpellBackArrowIcon)`
  fill: #f5e5c3;
  background-color: black;
  margin: 5px 0 8px 20px;
`;

export const SpellHeader = ({ pageTitle }) => {
  const router = useRouter();

  return (
    <StyledSpellHeader>
      <SpellBackArrow onClick={() => router.push("/")} />
      <StyledSpellTitle>{pageTitle}</StyledSpellTitle>
    </StyledSpellHeader>
  );
};
