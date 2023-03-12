import React from "react";
import Container from "../Container/Container";
import styles from "./SearchForm.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = ({ handleSubmit, value, handleChange }) => {
  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <input
            type="search"
            name="search"
            placeholder="Filter by name..."
            className={styles.input}
            onChange={handleChange}
            defaultValue={value}
          />
          <button className={styles.button} type="submit">
            <AiOutlineSearch className={styles.icon} size="20px" />
          </button>
        </label>
      </form>
    </Container>
  );
};

export default SearchForm;
