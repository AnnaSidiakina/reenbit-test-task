import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharactersList from "../components/CharactersList/CharactersList";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import Paginate from "../components/Pagination/Pagination";
import { topScroll } from "../functions/topScroll";
import Loader from "../components/Loader/Loader";
import { toast } from "react-toastify";
import { useGetCharactersQuery } from "../redux/characters/charactersSlice";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const Characters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("name") ?? "";
  const pageParam = Number(searchParams.get("page") ?? 1);

  const [inputValue, setInputValue] = useState(query || "");
  const [page, setPage] = useState(pageParam || 1);

  // get characters
  const { data, isFetching, error } = useGetCharactersQuery({
    query,
    page,
  });

  // sort characters by name
  const sortedList = data?.characters
    ? [...data.characters].sort((prevItem, nextItem) => {
        const firstItem = prevItem.name.toLowerCase();
        const secondItem = nextItem.name.toLowerCase();
        if (firstItem < secondItem) {
          return -1;
        }
        if (firstItem > secondItem) {
          return 1;
        }
        return 0;
      })
    : [];

  // handle page click
  const handleClick = (e) => {
    setPage(e.selected + 1);
    if (query) {
      setSearchParams({ name: query, page: e.selected + 1 });
      topScroll();
    }
    if (query === "") {
      setSearchParams({ page: e.selected + 1 });
      topScroll();
    }
  };

  // handle search input change
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setInputValue(value);
    if (value === "") {
      setSearchParams({ page: 1 });
      setPage(1);
    }
  };

  // handle submit search button
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.currentTarget.elements.search.value;
    if (searchForm === "") {
      toast.error("Please, enter your request");
    }
    if (page > 1) {
      setPage(1);
    }
    setSearchParams(
      searchForm !== "" ? { name: searchForm, page: 1 } : { page: page }
    );
  };

  return (
    <div>
      <Header />
      <SearchForm
        handleSubmit={handleSubmit}
        value={inputValue}
        handleChange={handleChange}
      />
      {error && <ErrorMessage />}
      {isFetching && <Loader />}
      {data && !error && <CharactersList characters={sortedList} />}
      {data && data.pages > 1 && !error && (
        <Paginate total={data.pages} handleClick={handleClick} page={page} />
      )}
    </div>
  );
};
export default Characters;
