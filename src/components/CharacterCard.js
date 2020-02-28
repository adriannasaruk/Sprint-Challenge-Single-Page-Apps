import React from "react";
import styled from "styled-components";

const NewSpan = styled.span`
background: lightblue;
  color: black;
  width: 385px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export default function CharacterCard(props) {
  return <NewSpan>
    <h2>Name: {props.name}</h2>
    <p>Species: {props.species}</p>
  </NewSpan>;
}
