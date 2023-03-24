import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { backArrowIcon, searchIcon } from "../assets/svgFiles";

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
  margin: 5px 115px 9px 0;
  font-size: 35px;
`;

const StyledBackButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

const BackArrow = styled(backArrowIcon)`
  fill: #f5e5c3;
  margin: 5px 0 8px 15px;
  vertical-align: middle;
`;

/* const Search = styled( searchIcon)`
  fill: #f5e5c3;
  margin: 0 20px 0 0;
  vertical-align: middle;
`; */

// Styling was taken from StackOverflow

export const Header = ({ pageTitle }) => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Link href="/">
        <StyledBackButton>
          <BackArrow onClick={() => router.push("/")} />
        </StyledBackButton>
      </Link>
      <StyledTitle>{pageTitle}</StyledTitle>
    </StyledHeader>
  );
};
