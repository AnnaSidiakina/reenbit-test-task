import React from "react";
import { useLocation, Link } from "react-router-dom";

const CharactersList = ({ characters }) => {
  const location = useLocation();

  return (
    <ul>
      {characters.map(({ id, name, species, image }) => (
        <li key={id}>
          <Link to={`character/${id}`} state={{ from: location }}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{species}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default CharactersList;
