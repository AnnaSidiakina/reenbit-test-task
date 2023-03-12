import React from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo/CharacterInfo";
import { useGetCharacterByIdQuery } from "../redux/characters/charactersSlice";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const OneCharacter = () => {
  const { characterId } = useParams();

  const { data, isFetching, error } = useGetCharacterByIdQuery(characterId);

  return (
    <>
      {error && <ErrorMessage />}
      {isFetching && <Loader />}
      {data && <CharacterInfo characterInfo={data} />}
    </>
  );
};
export default OneCharacter;
