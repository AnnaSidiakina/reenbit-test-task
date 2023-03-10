import React from "react";
import Container from "../Container/Container";
import styles from "./SearchForm.module.css";
import searchIcon from "../../assets/images/search.svg";

const SearchForm = () => {
  return (
    <Container>
      <form className={styles.form}>
        <label className={styles.label}>
          <img className={styles.icon} src={searchIcon} alt="Search icon" />
          <input
            type="search"
            name="search"
            placeholder="Filter by name..."
            className={styles.input}
          />
        </label>
      </form>
    </Container>
  );
};

export default SearchForm;
