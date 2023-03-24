import styled from "styled-components";
import { closeIcon } from "@/assets/svgFiles";

export const StatBlock = styled.div`
  text-align: left;
  display: inline-block;
  vertical-align: top;
  background: #fdf1dc;
  padding: 5px 10px 20px;
  box-shadow: 0 0 1.5em #867453;
`;

export const OrangeBorder = styled.hr`
  display: block;
  background: #e69a28;
  border: 1px solid #000;
  height: 9px;
  padding: 0 10px 0;
  margin: -10px -10px 0;
  box-sizing: initial;
`;

export const OrangeBorderBottom = styled.hr`
  margin: 15px -10px -20px;
  background: #e69a28;
  border: 1px solid #000;
  height: 5px;
  box-sizing: initial;
`;

export const SeparationLine = styled.svg`
  display: block;
  width: 100%;
  height: 5px;
  border: none;
  color: #922610;
  fill: #922610;
  stroke: #922610;
  height: "5";
  width: "100%";
  margin: 10px 0 5px 0;
`;

export const CreatureHeadingH1 = styled.h1`
  font-family: "Libre Baskerville", "Lora", "Calisto MT", "Bookman Old Style",
    Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter",
    Georgia, serif;
  color: #922610;
  font-size: 23px;
  line-height: 1.2em;
  margin: 10px 0 0;
  letter-spacing: 1px;
  font-variant: small-caps;
  font-weight: bold;
`;

export const CreatureHeadingH2 = styled.h2`
  font-weight: normal;
  font-style: italic;
  font-size: 12px;
  line-height: 1.2em;
  margin: 0 0 10px;
  color: black;
`;

export const CloseIcon = styled(closeIcon)`
  fill: black;
  margin: -45px 0px 0px 305px;
  vertical-align: middle;
  position: fixed;
  color: black;
  height: 35px;
`;

export const PropertyLine = styled.div`
  text-indent: -1em;
  padding-left: 1.1em;
  line-height: 1.4em;

  &.property_line_first {
    margin: 8px 0 0;
  }

  &.property_line_last {
    margin: 0 0 10px;
  }
`;

export const PropertyLineH4 = styled.h4`
  color: #7a200d;
  display: inline;
  margin: 0;
  font-size: 13.5px;
  line-height: 1.2em;
`;

export const PropertyLineP = styled.p`
  display: inline;
  margin: 0;
  color: #922610;
  font-size: 13.5px;
  line-height: 1.2em;
  color: #7a200d;
`;

export const Abilities = styled.div`
  text-align: center;
  color: #922610;
`;

export const AbilitiesDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 15.5%;
  min-width: 40px;
  font-size: 12px;
  line-height: 1em;
`;
export const AbilitiesH4 = styled.h4`
  margin: 10px 0 2px;
  font-size: 14px;
  line-height: 1.2em;
  text-transform: uppercase;
  color: #7a200d;
`;

export const AbilitiesP = styled.p`
  margin: 0 0 10px;
  line-height: 1.2em;
`;

export const PropertyBlock = styled.div`
  padding: 10px 2px 0;
`;

export const PropertyBlockH4 = styled.h4`
  font-style: italic;
  color: black;
`;

export const PropertyBlockP = styled.p`
  font-size: 13.5px;
  line-height: 1.2em;
  display: inline;
  margin: 0;
  color: black;
  font-size: 14px;
`;

export const Actions = styled.div`
  margin: 0 0 20px;
  font-size: 15px;
`;

export const ActionsH3 = styled.h3`
  border-bottom: 1px solid #7a200d;
  color: #7a200d;
  font-size: 21px;
  font-variant: small-caps;
  font-weight: normal;
  letter-spacing: 1px;
  margin: 20px 0 0;
  padding: 0 0 10px;
  text-indent: 5px;
`;

export const ActionsP = styled.div`
  margin: 10px 0 0 0;
  color: black;
`;
