import { fetchCharacterById } from "../API/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo/CharacterInfo";
import { useGetCharacterByIdQuery } from "../redux/characters/charactersSlice";

const OneCharacter = () => {
  const { characterId } = useParams();

  const { data, isFetching, error } = useGetCharacterByIdQuery(characterId);

  return <>{data && <CharacterInfo characterInfo={data} />}</>;
};
export default OneCharacter;
