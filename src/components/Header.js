import React from "react";
import WelcomePage from "./WelcomePage"
import CharacterList from "./CharacterList"
import {Route} from "react-router-dom"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
      <Route exact path="/">
         <WelcomePage/> 
         </Route>
       <Route path="/CharacterList" >
        <CharacterList/> 
        </Route> 
    </div>
    </header>
  );
}
