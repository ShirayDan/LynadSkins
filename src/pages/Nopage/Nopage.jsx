import React from "react";
import styles from "./Nopage.module.css";
import { Container } from "../../ui/Container";
import { ErrorMessage } from "./components/ErrorMessage";
export const Nopage = () => {
  return (
    <Container styles={styles.container}>
      <ErrorMessage></ErrorMessage>
    </Container>
  );
};
