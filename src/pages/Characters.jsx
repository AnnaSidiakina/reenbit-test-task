import React, { useEffect } from "react";
import { fetchCharactersByQuery } from "../API/api";

export const Characters = () => {
  useEffect(() => {
    async function addCharactersListByQuery() {
      try {
        const data = await fetchCharactersByQuery();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    addCharactersListByQuery();
  }, []);
};
