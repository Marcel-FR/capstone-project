import { MdAdd, MdArrowBack, MdClose } from "react-icons/md";
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
  background-color: #6772de;
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

/* export function EditButton() {
  const router = useRouter();
  return (
    <EditWrapper>
      <MdEdit />
    </EditWrapper>
  );
}

const EditWrapper = styled.button`
  font-size: 30px;
  background-color: #f5e5c3;
  border: none;
  color: black;
  margin: 0 0 0 0;
`; */

/* export function SearchButton() */

// More SVG sections to come..
