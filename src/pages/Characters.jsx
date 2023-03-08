import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharactersByQuery, fetchCharacters } from "../API/api";
import CharactersList from "../components/CharactersList/CharactersList";

const Characters = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    // if (query === "") {
    //   return;
    // }
    async function addCharactersListByQuery() {
      try {
        const data = await fetchCharacters();
        setCharactersList([...data.results]);

        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    addCharactersListByQuery();
  }, []);

  console.log("charactersList", charactersList);

  return (
    <div>
      {charactersList && <CharactersList characters={charactersList} />}
    </div>
  );
};
export default Characters;
