import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

const PARAMS = {
  characters: "/character",
  characterId: "/character/",
};

export const fetchCharacters = async (page) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/`
  );
  return data;
};

export const fetchCharactersByQuery = async (query, page) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/`
    // `${PARAMS.characters}/?name=${query}&page=${page}`
  );
  return data;
};

export const fetchCharacterById = async (id) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return data;
};
