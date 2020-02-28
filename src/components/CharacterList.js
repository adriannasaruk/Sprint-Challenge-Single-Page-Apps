import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);
  const [query, setQuery] = useState ("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
        .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
        .then(response => {

          const character = response.data.results.filter
          (character => character.name.toLowerCase().includes(query.toLowerCase())
          );
          console.log (response)
          setData(character);
          console.log(character);
        })
        .catch(error => {
          console.log("Sorry no data", error);
        });
    }, [query]);

    const handleInputChange = event => {
      setQuery(event.target.value);
    }

  return (
    <section className="character-list">
      <h2>Characters:</h2>
      <form>
        <p>Search by Name:</p>
        <input
        type = "text"
        onChange = {handleInputChange}
        value = {query}
        name = "name"
        />
      </form>
      {data.map(item => {
        return (
          <div>
            
          <CharacterCard key= {item.name}
          name = {item.name}
          species = {item.species}
          />
          </div>
        )
      })}
    </section>
  );
}
