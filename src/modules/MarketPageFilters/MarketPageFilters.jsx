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
        <div className={styles["filter-box"]} onClick={showAll}>
          {filter}
          <div
            className={
              open ? `${styles.icon} ${styles["icon-opened"]}` : styles.icon
            }
          >
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z" />
            </svg>
          </div>
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
        <div className={styles["icon-heart"]}>
          <svg fill="white" height="20px" width="20px" viewBox="0 0 140 130">
            <path d="M72.2,122.6C86.3,99.2,97,93.9,118.9,77.9c19.2-14.2,19.2-36.9,8.1-50.5C112.6,10.1,84,11.3,72.2,33.2  c-11.8-21.9-40.3-23.2-54.7-5.8C6.4,41,6.4,63.7,25.6,77.9C47.5,93.9,58.2,99.2,72.2,122.6L72.2,122.6L72.2,122.6z" />
          </svg>
        </div>
        <div className={styles["icon-cart"]}>
          <svg fill="white" width="15px" height="15px" viewBox="0 0 510 510">
            <path
              d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
			c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
			c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
			c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"
            />
          </svg>
        </div>
        {/* <div
          className={styles["icon-filters"]}
          onClick={() => handleClick()}
        ></div> */}
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
