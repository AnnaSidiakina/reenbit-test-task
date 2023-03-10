import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharactersByQuery, fetchCharacters } from "../API/api";
import CharactersList from "../components/CharactersList/CharactersList";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import { useSortedList } from "../hooks/useSortedList";
import { useGetCharactersQuery } from "../redux/characters/charactersSlice";
import Paginate from "../components/Pagination/Pagination";

const Characters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page") ?? 1);
  //   const page = 1;
  //   const query = "";
  //   const { data } = useGetCharactersQuery({ query, page });
  //   const { characters, pages } = data;

  const { data, isFetching, error } = useSortedList({
    query,
    page,
  });
  console.log("data", data);

  const handleClick = (e) => {
    if (query) {
      setSearchParams({ name: query, page: e.selected + 1 });
    }
    if (query === "") {
      setSearchParams({ page: e.selected + 1 });
    }
  };

  return (
    <div>
      <Header />
      <SearchForm />
      {data && <CharactersList characters={data.characters} />}
      {data && data.pages > 1 && (
        <Paginate total={data.pages} handleClick={handleClick} page={page} />
      )}
    </div>
  );
};
export default Characters;
