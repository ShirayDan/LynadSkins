import React, { useState } from "react";
import styles from "./Burger.module.css";
import { Button } from "../../../../ui/Button";
import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";
export const Burger = () => {
  const [open, setOpen] = useState(false);
  const [languageOpen, setlanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const burgerClick = (e) => {
    const el = document.querySelector("." + styles["burger-btn"]);
    const burger = document.querySelector("." + styles["burger"]);
    open == false ? setOpen(true) : setOpen(false);
    el.classList.toggle(styles["active"]);
    open
      ? burger.classList.remove(styles["active"])
      : burger.classList.add(styles["active"]);
  };

  const social = [1, 2, 3, 4];
  const openModal = (val, setVal) => {
    setVal(!val);
  };
  return (
    <>
      <div className={styles["burger-btn"]} onClick={burgerClick}>
        <span className={styles["burger-span-top"]}></span>
        <span className={styles["burger-span"]}></span>
        <span className={styles["burger-span-bottom"]}></span>
      </div>
      <div className={styles.burger}>
        <div className={styles["burger-top"]}>
          <h2 className={styles["burger-title"]}>
            Lynad<span className={styles["burger-color"]}>Skins</span>
          </h2>
        </div>
        <div className={styles["burger-main"]}>
          <div className={styles.links}>
            <nav>
              <a href="" className={styles.link}>
                Trade
              </a>
              <a href="" className={styles.link}>
                Market
              </a>
            </nav>
          </div>
          <h3 className={styles["burger-subtitle"]}>Settings</h3>
          <div className={styles["burger-btns"]}>
            <Button
              text={"Language"}
              style={styles.btn}
              onClick={() => openModal(languageOpen, setlanguageOpen)}
            ></Button>
            <Button
              text={"Currency"}
              onClick={() => openModal(currencyOpen, setCurrencyOpen)}
            ></Button>
            {languageOpen && (
              <div className={styles.language}>
                <List>
                  <ListItem>English</ListItem>
                  <ListItem>Ukrainian</ListItem>
                </List>
              </div>
            )}
            {currencyOpen && (
              <div className={styles.currency}>
                <List>
                  <ListItem>USD</ListItem>
                  <ListItem>UAH</ListItem>
                </List>
              </div>
            )}
          </div>
          <div className={styles.iconDay}></div>
          <div className={styles.social}>
            <ul className={styles["social-list"]}>
              {social.map((item, i) => {
                return (
                  <li className={styles["social-item"]}>
                    <a href="" className={styles.link}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
