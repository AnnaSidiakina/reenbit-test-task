import React from "react";
import Container from "../Container/Container";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <img className={styles.headerImage} src="" alt="Rick and Morty" />
    </Container>
  );
};
export default Header;
