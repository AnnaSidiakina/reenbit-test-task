import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <span className={styles.span}>44</span>
        </div>
        <p className={styles.message}>
          The page you are trying to search has been moved to another universe.
        </p>
        <Link to="/" className={styles.button}>
          GET ME HOME
        </Link>
      </div>
    </div>
  );
};
export default PageNotFound;
