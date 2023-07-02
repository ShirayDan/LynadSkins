import React, { useState } from "react";
import styles from "./MarketPageFilters.module.css";
import { useTranslation } from "react-i18next";

import { changeOverflow } from "../../helpers/helpers";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { FilterPhones } from "./components/FilterPhones";
import { Modal } from "../../components/Modal";
import { ModalSmall } from "../../components/ModalSmall";
import { Cart } from "./components/Cart";
import { Input } from "../../ui/Input";
import { Fav } from "./components/Fav";
import { Search } from "./components/Search";

import { FaAngleDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export const MarketPageFilters = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(t("sorting_newest"));
  const [moreFilters, setMoreFilters] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [favOpen, setFavOpen] = useState(false);

  const showAll = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setMoreFilters(!moreFilters);
    changeOverflow(moreFilters);
  };

  const openCartMenu = () => {
    setCartOpen(!cartOpen);
    if (window.innerWidth < 1050) {
      changeOverflow(cartOpen);
    }
  };

  const openFavMenu = () => {
    setFavOpen(!favOpen);
    if (window.innerWidth < 1050) {
      changeOverflow(cartOpen);
    }
  };
  const filterModalClick = (text) => {
    setOpen(false);
    setFilter(text);
  };

  const searchModalClick = (text) => {
    setSearch(!search);
    changeOverflow(search);
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
      <div className={styles["filter-top"]}>
        <div className={styles.input}>
          <Input width={"100%"} />
          <div className={styles["search-btn"]}>
            <div className={styles["icon-search"]}>
              <FaSearch fontSize={"15px"} fill="white" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["filter-bottom"]}>
        <div className={styles["filter-left"]}>
          <div className={styles.fav} onClick={() => openFavMenu()}>
            <div className={styles["icon-heart"]}>
              <FaHeart fontSize={"15px"} fill="white" />
            </div>
          </div>
          <div className={styles["filter-box"]} onClick={showAll}>
            {filter}
            <div
              className={
                open ? `${styles.icon} ${styles["icon-opened"]}` : styles.icon
              }
            >
              <FaAngleDown fontSize={"25px"} />
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
          <div className={styles.search} onClick={() => searchModalClick()}>
            <div className={styles["icon-search"]}>
              <FaSearch fontSize={"15px"} fill="white" />
            </div>
          </div>

          <div className={styles.cart} onClick={() => openCartMenu()}>
            <div className={styles["icon-cart"]}>
              <FaShoppingCart fontSize={"15px"} fill="white" />
            </div>
          </div>

          <div className={styles["icon-filters"]} onClick={() => handleClick()}>
            <FaFilter fontSize={"15px"} fill="white" />
          </div>
        </div>
      </div>
      {moreFilters && (
        <Modal
          handleClick={() => handleClick()}
          children={<FilterPhones />}
          guns={true}
        />
      )}
      {cartOpen && (
        <ModalSmall handleClick={() => openCartMenu()} children={<Cart />} />
      )}
      {favOpen && (
        <ModalSmall handleClick={() => openFavMenu()} children={<Fav />} />
      )}
      {search && (
        <Modal
          handleClick={() => searchModalClick()}
          children={<Search />}
          guns={true}
        />
      )}
    </div>
  );
};
