import { MdAdd, MdArrowBack, MdClose } from "react-icons/md";
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';
import styled from "styled-components";
import { useRouter } from "next/router";

// The knowledge about the correct import/export and styling of the SVGs was taken from various websites on the Internet.

// Header styling
const ArrowWrapper = styled.button`
  font-size: 30px;
  background-color: #ac2023;
  border: none;
  color: #f5e5c3;
  margin: 0 0 0 15px;
  font-size: 35px;
`;

const SpellArrowWrapper = styled.button`
  font-size: 30px;
  background-color: #20aca9;
  border: none;
  color: #f5e5c3;
  margin: 0 0 0 15px;
  font-size: 35px;
`;

const AddWrapper = styled.button`
  font-size: 30px;
  background-color: #ac2023;
  border: none;
  color: #f5e5c3;
  margin: 0 15px 0 0px;
  font-size: 35px;
`;

const CloseWrapper = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5e5c3;
  color: #ac2023;
  border: none;
  font-size: 30px;
  width: 40px;
  top: 10px;
  right: 10px;
`;

const D20Wrapper = styled.div`
  position: absolute;
  font-size: 190px;
  top: 36vh;
  left: 14.3vh;
  color: #f5e5c3;
`

//Header functions
export function BackArrowIcon() {
  const router = useRouter();
  return (
    <ArrowWrapper>
      <MdArrowBack onClick={() => router.push("/")} />
    </ArrowWrapper>
  );
}

export function SpellBackArrowIcon() {
  const router = useRouter();
  return (
    <SpellArrowWrapper>
      <MdArrowBack onClick={() => router.push("/")} />
    </SpellArrowWrapper>
  );
}

export function AddIcon() {
  const router = useRouter();
  return (
    <AddWrapper>
      <MdAdd onClick={() => router.push("/bestiary/monsterCreation")} />
    </AddWrapper>
  );
}

export function CloseIcon() {
  const router = useRouter();
  return (
    <CloseWrapper>
      <MdClose onClick={() => router.push("/bestiary")} />
    </CloseWrapper>
  );
}

// Homescreen

export function D20() {
  return (
    <D20Wrapper>
      <GiDiceTwentyFacesTwenty />
    </D20Wrapper>
  );
}