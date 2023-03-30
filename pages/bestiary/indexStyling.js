import styled from "styled-components";

export const MonsterName = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid transparent;
  width: 100%;
  padding: 10px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MonsterDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const MonsterType = styled.li`
  font-style: italic;
  font-size: 0.8rem;
  text-align: right;
`;

export const MonsterCR = styled.li`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: auto;
  text-align: right;
`;
