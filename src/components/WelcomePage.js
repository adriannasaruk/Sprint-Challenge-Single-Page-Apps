import React from "react";
import CharacterList from "./CharacterList"
import {Route} from "react-router-dom";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NewStyle = styled.nav`
background: black;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default function WelcomePage() {
  return (
<div>
    <Link to = "/CharacterList">Characters
        </Link>
         
    <NewStyle className="welcome-page">
      
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      
      
    </NewStyle>
    </div>
  );
}
