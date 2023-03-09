import React from "react";
import { useLocation, Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./CharacterList.module.css";

const CharactersList = ({ characters }) => {
  const location = useLocation();

  return (
    <Container>
      <ul className={styles.list}>
        {characters.map(({ id, name, species, image }) => (
          <li className={styles.item} key={id}>
            <Link
              className={styles.link}
              to={`character/${id}`}
              state={{ from: location }}
            >
              <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={name} />
              </div>
              <div className={styles.infoContainer}>
                <p className={styles.name}>{name}</p>
                <p className={styles.species}>{species}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default CharactersList;
