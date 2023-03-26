import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  backArrowIcon,
  searchIcon,
  editIcon,
  addIcon,
} from "../assets/svgFiles";

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
  margin: 0px 120px 9px 0;
  font-size: 35px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

const StyledEditButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

const BackArrow = styled(backArrowIcon)`
  fill: #f5e5c3;
  margin: 5px 0 8px 20px;
`;

/* const Search = styled( searchIcon)`
  fill: #f5e5c3;
  margin: 0 20px 0 0;
  vertical-align: middle;
`; */

const Add = styled(addIcon)`
  position: absolute;
  fill: #f5e5c3;
  margin: 5px 0 8px 315px;
  height: 35px;
`;

// Styling was taken from StackOverflow

export const Header = ({ pageTitle }) => {
  const router = useRouter();

  return (
    <StyledHeader>
      <BackArrow onClick={() => router.push("/")} />
      <Add onClick={() => router.push("/bestiary/monsterCreation")} />
      <StyledTitle>{pageTitle}</StyledTitle>
    </StyledHeader>
  );
};
