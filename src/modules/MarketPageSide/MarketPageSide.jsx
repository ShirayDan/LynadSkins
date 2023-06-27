import React, { useState } from "react";
import styles from "./MarketPageSide.module.css";
import { useTranslation } from "react-i18next";

import { Exterior } from "./components/Exterior";
import { Float } from "./components/Float";
import { Other } from "./components/Other";
import { Price } from "./components/Price";
import { Rarity } from "./components/Rarity";
import { Type } from "./components/Type";
import { Color } from "./components/Color";
import { Typeography } from "../../ui/Typeography";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container/Container";

export const MarketPageSide = () => {
  const { t } = useTranslation();
  const FilterItem = ({ filter, fullList }) => {
    const [open, setOpen] = useState(false);
    const showAll = () => {
      setOpen(!open);
    };
    return (
      <>
        <div className={styles["filter-item"]} onClick={showAll}>
          <Typeography color={"white"} fontSize={"20px"}>
            {filter}
          </Typeography>
          <div className={styles.icon}>
            {open ? (
              <span className={styles["icon-minus"]}>-</span>
            ) : (
              <span className={styles["icon-plus"]}>+</span>
            )}
          </div>
        </div>
        {open && fullList}
      </>
    );
  };

  return (
    <Container styles={styles.container}>
      <Typeography variant={"h2"} fontSize={"24px"} color={"white"}>
        {t("filters")}
      </Typeography>
      <div className={styles.filters}>
        <FilterItem filter={t("price")} fullList={<Price />} />
        <FilterItem filter={t("type")} fullList={<Type />} />
        <FilterItem filter={t("exteriror")} fullList={<Exterior />} />
        <FilterItem filter={t("colour")} fullList={<Color />} />
        <FilterItem filter={t("float")} fullList={<Float />} />
        <FilterItem filter={t("rarity")} fullList={<Rarity />} />
        <FilterItem filter={t("other")} fullList={<Other />} />
        <div className={styles.btns}>
          <Button hover={true} text={t("reset")}></Button>
          <Button hover={true} text={t("save")}></Button>
        </div>
      </div>
    </Container>
  );
};
