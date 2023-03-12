import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo/CharacterInfo";
import { useGetCharacterByIdQuery } from "../redux/characters/charactersSlice";
import Loader from "../components/Loader/Loader";

const OneCharacter = () => {
  const { characterId } = useParams();

  const { data, isFetching, error } = useGetCharacterByIdQuery(characterId);

  return (
    <>
      {isFetching && <Loader />}
      {data && <CharacterInfo characterInfo={data} />}
    </>
  );
};
export default OneCharacter;
