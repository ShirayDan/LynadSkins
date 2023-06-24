import React from "react";
import styles from "./MarketPage.module.css";
import { MarketPageFilters } from "../../modules/MarketPageFilters";
import { MarketPageItems } from "../../modules/MarketPageItems";
import { MarketPageSide } from "../../modules/MarketPageSide";
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
