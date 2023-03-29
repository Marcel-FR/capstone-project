import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    max-width: 375px;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-color: #303134;
    color: #CCCCCC;
  }
`;
