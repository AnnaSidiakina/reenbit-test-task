import React from "react";
import Container from "../Container/Container";
import styles from "./SearchForm.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

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
SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};
export default SearchForm;
