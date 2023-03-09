import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharactersByQuery, fetchCharacters } from "../API/api";
import CharactersList from "../components/CharactersList/CharactersList";

const Characters = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const sortedList = charactersList.sort((firstChar, secondChar) => {
    const firstCharName = firstChar.name.toLowerCase();
    const secondCharName = secondChar.name.toLowerCase();
    if (firstCharName < secondCharName) {
      return -1;
    }
    if (firstCharName > secondCharName) {
      return 1;
    }
    return 0;
  });

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
    <div>{charactersList && <CharactersList characters={sortedList} />}</div>
  );
};
export default Characters;
