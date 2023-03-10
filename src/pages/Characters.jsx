import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharactersByQuery, fetchCharacters } from "../API/api";
import CharactersList from "../components/CharactersList/CharactersList";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import { useSortedList } from "../hooks/useSortedList";
import { useGetCharactersQuery } from "../redux/characters/charactersSlice";

const Characters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //   const query = searchParams.get("query") ?? "";
  const page = 1;
  const query = "";
  //   const { data } = useGetCharactersQuery({ query, page });
  //   const { characters, pages } = data;

  const { data, isFetching, error } = useSortedList({
    query,
    page,
  });
  console.log("data", data);

  //   useEffect(() => {
  //     // if (query === "") {
  //     //   return;
  //     // }
  //     async function addCharactersListByQuery() {
  //       try {
  //         const data = await fetchCharacters();
  //         setCharactersList([...data.results]);

  //         console.log(data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     }
  //     addCharactersListByQuery();
  //   }, []);

  return (
    <div>
      <Header />
      <SearchForm />
      {data && <CharactersList characters={data.characters} />}
    </div>
  );
};
export default Characters;
