import React, { useState } from "react";
import styles from "./MarketPageSide.module.css";
import { Exterior } from "./components/Exterior";
import { Float } from "./components/Float";
import { Other } from "./components/Other";
import { Price } from "./components/Price";
import { Rarity } from "./components/Rarity";
import { Type } from "./components/Type";
import { Color } from "./components/Color";
import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";
import { Container } from "../../../../ui/Container/Container";
export const MarketPageSide = () => {
  const FilterItem = ({ filter, fullList }) => {
    const [open, setOpen] = useState(false);
    const showAll = () => {
      setOpen(!open);
    };
    return (
      <>
        {" "}
        <div className={styles["filter-item"]} onClick={showAll}>
          <Typeography fontSize={"20px"}>{filter}</Typeography>
          <div className={styles.icon}>{open ? "-" : "+"}</div>
        </div>
        {open && fullList}
      </>
    );
  };

  return (
    <Container styles={styles.container}>
      <Typeography variant={"h2"} fontSize={"24px"} color={"white"}>
        Filters
      </Typeography>
      <div className={styles.filters}>
        <FilterItem filter={"Price"} fullList={<Price />} />
        <FilterItem filter={"Type"} fullList={<Type />} />
        <FilterItem filter={"Exterior"} fullList={<Exterior />} />
        <FilterItem filter={"Colour"} fullList={<Color />} />
        <FilterItem filter={"Float"} fullList={<Float />} />
        <FilterItem filter={"Rarity"} fullList={<Rarity />} />
        <FilterItem filter={"Other"} fullList={<Other />} />
        <div className={styles.btns}>
          <Button text={"Reset"}></Button>
          <Button text={"Save"}></Button>
        </div>
      </div>
    </Container>
  );
};
