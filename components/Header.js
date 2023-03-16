import styled from "styled-components"

const StyledHeader = styled.header`
  position: relative;
  width: 375px;
  height: 80px;
  color: #AC2023;
  background-color: #AC2023;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: #F5E5C3;
`;

export const Header = ({ pageTitle }) => (
  <StyledHeader>
    <StyledTitle>{pageTitle}</StyledTitle>
   </StyledHeader>
);
