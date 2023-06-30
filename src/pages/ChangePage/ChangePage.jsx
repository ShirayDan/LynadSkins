import React from "react";
import styles from "./ChangePage.module.css";
import { MarketPageFilters } from "../../modules/MarketPageFilters";
import { MarketPageItems } from "../../modules/MarketPageItems";
import { MarketPageSide } from "../../modules/MarketPageSide";
import { Container } from "../../ui/Container";
import { Tab } from "../../components/Tab";
import { BuyBtn } from "./components/BuyBtn";
import { PersonalPage } from "./components/PersonalPage";

export const ChangePage = () => {
  return (
    <>
      <Container styles={styles.container}>
        <div className={styles.tabs}>
          <BuyBtn />
          <Tab
            amount={2}
            firstTab={"Inventory"}
            secondTab={"LynadSkins"}
            firstContent={
              <div>
                <MarketPageFilters />
                <PersonalPage />
              </div>
            }
            secondContent={
              <div>
                <MarketPageFilters />
                <MarketPageItems />
              </div>
            }
          />
        </div>
        <div className={styles.profile}>
          <MarketPageFilters />
          <PersonalPage />
        </div>
        <div className={styles.sideBar}>
          <MarketPageSide />
        </div>
        <div className={styles.items}>
          <MarketPageFilters />
          <MarketPageItems />
        </div>
      </Container>
    </>
  );
};
