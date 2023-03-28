import { MdAdd, MdArrowBack, MdClose, MdDelete, MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useRouter } from "next/router";

// The knowledge about the correct import/export and styling of the SVGs was taken from various websites on the Internet.

// Header section
export function BackArrowIcon() {
  const router = useRouter();
  return (
    <ArrowIcon>
      <MdArrowBack onClick={() => router.push("/")} />
    </ArrowIcon>
  );
}

const ArrowIcon = styled.button`
font-size: 30px;
background-color: #ac2023;
border: none;
color: #f5e5c3;
`;


export function AddIcon() {
  const router = useRouter();
  return (
    <AddWrapper>
      <MdAdd onClick={() => router.push("/bestiary/monsterCreation")} />
    </AddWrapper>
  );
}

const AddWrapper = styled.button`
font-size: 30px;
background-color: #ac2023;
border: none;
color: #f5e5c3;
`;

export function CloseIcon() {
  const router = useRouter();
  return (
    <CloseWrapper>
      <MdClose onClick={() => router.push("/bestiary")} />
    </CloseWrapper>
  );
}

const CloseWrapper = styled.button`
font-size: 30px;
background-color: #ac2023;
border: none;
color: #f5e5c3;
`;

export function DeleteIcon({onDeleteMonster, handleDeleteMonster}) {
  const router = useRouter();
  return (
    <DeleteWrapper>
      <MdDelete onClick={() => onDeleteMonster={handleDeleteMonster}} />
    </DeleteWrapper>
  );
}

const DeleteWrapper = styled.button`
font-size: 30px;
background-color: #ac2023;
border: none;
color: #f5e5c3;
`

export function EditButton() {
  const router = useRouter();
  return (
    <EditWrapper>
      <MdEdit />
    </EditWrapper>
  )
}

const EditWrapper = styled.button`
font-size: 30px;
background-color: #ac2023;
border: none;
color: #f5e5c3;
`
/* export function SearchButton() */
// More SVG sections to come..
