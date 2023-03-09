import React from "react";
import GoBackButton from "../GoBackButton/GoBackButton";
import styles from "./CharacterInfo.module.css";
import Container from "../Container/Container";

const CharacterInfo = ({ characterInfo }) => {
  return (
    <>
      <GoBackButton />
      <Container>
        <div className={styles.infoWrapper}>
          <div className={styles.imageWrapper}>
            <img src={characterInfo.image} alt={characterInfo.name} />
          </div>
          <h1 className={styles.title}>{characterInfo.name}</h1>
          <h2 className={styles.infoTitle}>Informations</h2>
          <ul>
            <li>
              <p>Gender</p>
              <p>{characterInfo.gender}</p>
            </li>
            <li>
              <p>Status</p>
              <p>{characterInfo.status}</p>
            </li>
            <li>
              <p>Specie</p>
              <p>{characterInfo.species}</p>
            </li>
            <li>
              <p>Origin</p>
              <p>{characterInfo.origin.name}</p>
            </li>
            <li>
              <p>Type</p>
              <p>{characterInfo.type}</p>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default CharacterInfo;
