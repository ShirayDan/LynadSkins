import React, { useRef, useState } from "react";
import styles from "./Burger.module.css";
import { Link } from "react-router-dom";
import { changeOverflow } from "../../../../helpers/helpers";

import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";
import { Typeography } from "../../../../ui/Typeography";
import { DarkMode } from "../../../../components/DarkMode";
import { Language } from "../../../../components/Language";
import { Currency } from "../../../../components/Currency";

export const Burger = ({ theme, setTheme, langFunc }) => {
  const [open, setOpen] = useState(false);
  const burger = useRef();
  const burgerBtn = useRef();

  const burgerClick = () => {
    open == false ? setOpen(true) : setOpen(false);
    burgerBtn.current.classList.toggle(styles["active"]);
    open
      ? burger.current.classList.remove(styles["active"])
      : burger.current.classList.add(styles["active"]);
    changeOverflow(open);
  };
  const social = [1, 2, 3, 4];

  return (
    <>
      <div
        className={styles["burger-btn"]}
        ref={burgerBtn}
        onClick={burgerClick}
      >
        <span className={styles["burger-span-top"]}></span>
        <span className={styles["burger-span"]}></span>
        <span className={styles["burger-span-bottom"]}></span>
      </div>
      <div className={styles.burger} ref={burger}>
        <div className={styles["burger-main"]}>
          <div className={styles["burger-top"]}>
            <Link to={"/"}>
              {" "}
              <Typeography
                variant={"h2"}
                fontSize={"32px"}
                color={"white-strong"}
              >
                Lynad
                <Typeography
                  variant={"span"}
                  fontSize={"32px"}
                  color={"purple"}
                >
                  Skins
                </Typeography>
              </Typeography>
            </Link>
          </div>
          <div className={styles.links}>
            <nav>
              <List>
                <ListItem style={styles.item}>
                  <Link to={"/trade"}>
                    <Typeography color={"white-strong"} fontSize={"20px"}>
                      Trade
                    </Typeography>
                  </Link>
                </ListItem>
                <ListItem style={styles.item}>
                  <Link to={"/market"}>
                    <Typeography color={"white-strong"} fontSize={"20px"}>
                      Market
                    </Typeography>
                  </Link>
                </ListItem>
              </List>
            </nav>
          </div>
          <Typeography
            m={"15px 0 0 0"}
            variant={"h3"}
            fontSize={"20px"}
            color={"white-strong"}
          >
            Settings
          </Typeography>
          <div className={styles["burger-btns"]}>
            <Language langFunc={langFunc} />
            <Currency />
          </div>
        </div>
        <div className={styles.social}>
          <List
            variant={"ul"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {social.map((item, i) => {
              return (
                <ListItem style={styles["social-item"]}>
                  <a href="" className={styles.link}>
                    {item}
                  </a>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    </>
  );
};
