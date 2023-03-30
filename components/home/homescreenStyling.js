import styled from "styled-components";

export const Heading = styled.h1`
  font-family: "Libre Baskerville", "Lora", "Calisto MT", "Bookman Old Style",
    Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter",
    Georgia, serif;
  font-size: 40px;
  color: black;
  line-height: 1.2em;
  margin: 0;
  letter-spacing: 1px;
  font-variant: small-caps;
  font-weight: bold;
  text-align: center;
  border: 5px solid black;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: #f5e5c3;
`;

export const Ring = styled.div`
  position: absolute;
  top: 13vh;
  left: 6vh;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 50px;
  background: linear-gradient(
        to top right,
        #20aca9 calc(50% - 6px),
        #303134 calc(50% - 5px),
        #303134 50%,
        transparent 51%
      )
      calc(50% + 10px) -10px/20px 35px,
    linear-gradient(
        to bottom right,
        #20aca9 calc(50% - 6px),
        #303134 calc(50% - 5px),
        #303134 50%,
        transparent 51%
      )
      calc(50% + 10px) 25px/20px 35px,
    linear-gradient(to right, #20aca9 50%, #ac2023 50%);
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 50px;
    background: linear-gradient(#303134, #303134) content-box,
      linear-gradient(
          to top right,
          ${(props) => props.color} calc(50% - 6px),
          #303134 calc(50% - 5px),
          #303134 50%,
          transparent 51%
        )
        calc(50% + 10px) -10px/20px 35px,
      linear-gradient(
          to bottom right,
          ${(props) => props.color} calc(50% - 6px),
          #303134 calc(50% - 5px),
          #303134 50%,
          transparent 51%
        )
        calc(50% + 10px) 25px/20px 35px;
    background-repeat: no-repeat;
  }

  &::before {
    transform: rotate(180deg);
  }

  &::after {
    transform: rotate(-180deg);
  }
`;

// The Ring component above was CSS from (here: https://stackoverflow.com/questions/54335233/how-to-create-a-3-segment-donut-ring-with-css) and I translated it to StyledComponents and changed its values to suit my needs.

export const StyledBestiaryLink = styled.a`
  position: absolute;
  top: 30vh;
  left: 30vh;
  padding: 150px 70px 140px 70px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin-right: 20px;
`;

export const StyledSpellbookLink = styled.a`
  position: absolute;
  top: 30vh;
  left: 6vh;
  padding: 150px 70px 140px 70px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin-right: 20px;
`;