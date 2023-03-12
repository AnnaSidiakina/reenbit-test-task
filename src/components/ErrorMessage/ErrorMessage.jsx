import React from "react";
import Container from "../Container/Container";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <Container>
      <div className={styles.container}>
        <p className={styles.message}>
          We couldn't find anyting on your request. Please, try again.
        </p>
      </div>
    </Container>
  );
};

export default ErrorMessage;
