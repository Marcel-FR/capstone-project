import styled from "styled-components";

export const StatBlockForm = styled.form`
  text-align: left;
  display: inline-block;
  vertical-align: top;
  background: #fdf1dc;
  padding: 5px 10px 20px;
  box-shadow: 0 0 1.5em #867453;
`;

export const TitleInput = styled.input`
  font-family: "Libre Baskerville", "Lora", "Calisto MT", "Bookman Old Style",
    Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter",
    Georgia, serif;
  color: #922610;
  font-size: 15px;
  line-height: 1.2em;
  letter-spacing: 1px;
  font-variant: small-caps;
  font-weight: bold;
  width: 200px;
  border: 0px solid #ccc;
  background-color: #fdf1dc;
  box-shadow: 0px 1px 0px 0px black;

  ::placeholder {
  font-family: "Libre Baskerville", "Lora", "Calisto MT", "Bookman Old Style",
    Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter",
    Georgia, serif;
  color: #922610;
  font-size: 20px;
  line-height: 1.2em;
  letter-spacing: 1px;
  font-variant: small-caps;
  font-weight: bold;
  }
`;

export const StatSelection = styled.select`
  width: 110px;
  max-width: 375px;
  font-size: 15px;
  margin-right: 5px;
  border: 0px solid #ccc;
  background-color: #fdf1dc;
  box-shadow: 0px 1px 0px 0px black;
  font-style: italic;
`;


export const FirstStatBlock = styled.input`
  width: 150px;
  max-width: 375px;
  font-size: 15px;
  margin-right: 20px;
  border: 0px solid #ccc;
  background-color: #fdf1dc;
  box-shadow: 0px 1px 0px 0px black;
  font-style: italic;

`;

export const SecondStatBlock = styled.input`
  width: 50px;
  font-size: 15px;
  text-align: center;
  padding: 5px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
