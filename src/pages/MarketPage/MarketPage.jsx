import React from "react";
import styles from "./MarketPage.module.css";
import { MarketPageFilters } from "./components/MarketPageFilters";
import { MarketPageItems } from "./components/MarketPageItems";
import { MarketPageSide } from "./components/MarketPageSide";
import { Container } from "../../ui/Container";
export const MarketPage = () => {
  return (
    <>
      <Container styles={styles.container}>
        <div className={styles.sideBar}>
          <MarketPageSide />
        </div>
        <div>
          <MarketPageFilters />
          <MarketPageItems />
        </div>
      </Container>
    </>
  );
};
