import React, { useState } from "react";
import styles from "./MarketPageFilters.module.css";
import { useTranslation } from "react-i18next";

import { changeOverflow } from "../../helpers/helpers";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { FilterPhones } from "./components/FilterPhones";
import { Modal } from "../../components/Modal";

export const MarketPageFilters = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(t("sorting_newest"));
  const [moreFilters, setMoreFilters] = useState(false);

  const showAll = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setMoreFilters(!moreFilters);
    changeOverflow(moreFilters);
  };

  const filterModalClick = (text) => {
    setOpen(false);
    setFilter(text);
  };

  const filterParams = [
    t("sorting_newest"),
    t("sorting_price_low"),
    t("sorting_price_high"),
    t("sorting_float_low"),
    t("sorting_float_high"),
  ];

  return (
    <div className={styles.filters}>
      <div className={styles["filter-left"]}>
        <div className={styles.icon}></div>
        <div className={styles["filter-box"]} onClick={showAll}>
          {filter}
          <div className={styles.icon}></div>
          {open && (
            <div className={styles["filters-container"]}>
              <List variant={"ul"}>
                {filterParams.map((item) => {
                  return (
                    <ListItem
                      style={styles.item}
                      onClick={() => filterModalClick(item)}
                    >
                      {item}
                    </ListItem>
                  );
                })}
              </List>
            </div>
          )}
        </div>
      </div>
      <div className={styles["filter-right"]}>
        <div className={styles.icon}></div>
        <div
          className={styles["icon-filters"]}
          onClick={() => handleClick()}
        ></div>
      </div>
      {moreFilters && (
        <Modal
          handleClick={() => handleClick()}
          children={<FilterPhones />}
          guns={true}
        />
      )}
    </div>
  );
};
