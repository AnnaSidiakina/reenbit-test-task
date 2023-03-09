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
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Gender</p>
              <p className={styles.itemInfo}>{characterInfo.gender}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Status</p>
              <p className={styles.itemInfo}>{characterInfo.status}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Specie</p>
              <p className={styles.itemInfo}>{characterInfo.species}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Origin</p>
              <p className={styles.itemInfo}>{characterInfo.origin.name}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.itemTitle}>Type</p>
              <p className={styles.itemInfo}>
                {characterInfo.type === "" ? "Unknown" : characterInfo.type}
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default CharacterInfo;
