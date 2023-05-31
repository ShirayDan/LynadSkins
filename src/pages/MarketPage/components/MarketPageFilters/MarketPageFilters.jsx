import React, { useState } from "react";
import styles from "./MarketPageFilters.module.css";
import { Filters } from "./components/Filters";
export const MarketPageFilters = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("Default");
  const ShowFilters = ({ fullList }) => {
    const showAll = () => {
      setOpen(!open);
    };
    return (
      <>
        {" "}
        <div className={styles["filter-box"]} onClick={showAll}>
          {filter}
          <div className={styles.icon}></div>
          {open && fullList}
        </div>
      </>
    );
  };
  return (
    <div className={styles.filters}>
      <div className={styles["filter-left"]}>
        <div className={styles.icon}></div>
        <ShowFilters
          fullList={<Filters setOpen={setOpen} setFilter={setFilter} />}
        />
      </div>
      <div className={styles["filter-right"]}>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
      </div>
    </div>
  );
};
