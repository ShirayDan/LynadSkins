import React, { useRef, useState } from "react";
import styles from "./Burger.module.css";
import { Link } from "react-router-dom";
import { changeOverflow } from "../../../../helpers/helpers";
import { useTranslation } from "react-i18next";

import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";
import { Typeography } from "../../../../ui/Typeography";
import { Language } from "../../../../components/Language";
import { Currency } from "../../../../components/Currency";

import { FaSteam } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Burger = ({ langFunc }) => {
  const [open, setOpen] = useState(false);
  const burger = useRef();
  const burgerBtn = useRef();
  const { t } = useTranslation();

  const burgerClick = () => {
    open == false ? setOpen(true) : setOpen(false);
    burgerBtn.current.classList.toggle(styles["active"]);
    open
      ? burger.current.classList.remove(styles["active"])
      : burger.current.classList.add(styles["active"]);
    changeOverflow(open);
  };

  const social = [
    {
      icon: <FaInstagram fill="white" fontSize={"20px"} />,
      link: "https://www.instagram.com",
    },
    {
      icon: <FaSteam fill="white" fontSize={"20px"} />,
      link: "https://store.steampowered.com",
    },
    {
      icon: <FaTelegram fill="white" fontSize={"20px"} />,
      link: "https://web.telegram.org",
    },
    {
      icon: <FaTwitter fill="white" fontSize={"20px"} />,
      link: "https://twitter.com/",
    },
  ];

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
            {t("settings")}
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
                  <a href={item.link} className={styles.link}>
                    {item.icon}
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
