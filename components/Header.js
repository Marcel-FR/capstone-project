import styled from "styled-components";
import { BackArrowIcon, AddIcon } from "./svgFiles";

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
