import { fetchCharacterById } from "../API/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo/CharacterInfo";

const OneCharacter = () => {
  const [characterInfo, setCharacterInfo] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    async function addCharacterInfo() {
      if (characterId) {
        try {
          const result = await fetchCharacterById(characterId);
          setCharacterInfo(result);
          return result;
        } catch (error) {
          console.log(error);
        }
      }
    }
    addCharacterInfo();
  }, [characterId]);

  return (
    <>
      {characterInfo && (
        <CharacterInfo characterInfo={characterInfo} />
        // <div>
        //   <img src={characterInfo.image} alt={characterInfo.name} />
        //   <p>{characterInfo.name}</p>
        //   <h2>Informations</h2>
        //   <ul>
        //     <li>
        //       <p>Gender</p>
        //       <p>{characterInfo.gender}</p>
        //     </li>
        //     <li>
        //       <p>Status</p>
        //       <p>{characterInfo.status}</p>
        //     </li>
        //     <li>
        //       <p>Specie</p>
        //       <p>{characterInfo.species}</p>
        //     </li>
        //     <li>
        //       <p>Origin</p>
        //       <p>{characterInfo.origin.name}</p>
        //     </li>
        //     <li>
        //       <p>Type</p>
        //       <p>{characterInfo.type}</p>
        //     </li>
        //   </ul>
        // </div>
      )}
    </>
  );
};
export default OneCharacter;
