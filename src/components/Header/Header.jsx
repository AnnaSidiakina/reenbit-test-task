import React from "react";
import Container from "../Container/Container";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <div className={styles.imgContainer}>
        <img className={styles.headerImage} src="" alt="Rick and Morty" />
      </div>
    </Container>
  );
};
export default Header;
