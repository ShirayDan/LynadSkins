import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { Typeography } from "../../ui/Typeography";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { Container } from "../../ui/Container";

import { FaSteam } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const d = new Date().getFullYear();
  const { t, i18n } = useTranslation();

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

  const data = [
    {
      title: t("footer_one_title"),
      items: [
        { text: t("footer_one_item_one"), link: "/prime" },
        { text: t("footer_one_item_two"), link: "/" },
        { text: t("footer_one_item_three"), link: "/" },
        { text: t("footer_one_item_four"), link: "/" },
      ],
    },
    {
      title: t("footer_two_title"),
      items: [
        { text: t("footer_two_item_one"), link: "/" },
        { text: t("footer_two_item_two"), link: "/" },
        { text: t("footer_two_item_three"), link: "/" },
        { text: t("footer_two_item_four"), link: "/" },
      ],
    },
    {
      title: t("footer_three_title"),
      items: [
        { text: "LynadSkins@gmail.com" },
        { text: "+(642)34276244" },
        { text: " 442 Belle Terre St Floor 7, San Francisco, AV 4206" },
      ],
    },
  ];
  return (
    <footer className={styles.footer}>
      <Container styles={styles.container}>
        <div className={styles.item}>
          <Typeography variant={"h2"} color={"white"}>
            Lynad
            <Typeography variant={"span"} color={"purple"} fontSize={"32px"}>
              Skins
            </Typeography>
          </Typeography>
          <Typeography color={"white"} p={"5px 0"}>
            {t("footer_advantages")}
          </Typeography>
          <List variant={"ul"} mt={"25px"}>
            {social.map((item, i) => {
              return (
                <ListItem style={styles.socialItem} key={i}>
                  <a href={item.link} className={styles.link}>
                    {item.icon}
                  </a>
                </ListItem>
              );
            })}
          </List>
        </div>
        {data.map((item, i) => {
          return (
            <div className={styles.item} key={i}>
              <Typeography variant={"h3"} p={"0 0 15px 0"} color={"white"}>
                {item.title}
              </Typeography>
              <List variant={"ul"}>
                {i == data.length - 1
                  ? item.items.map((el, i) => (
                      <ListItem p={"5px 0"} key={i}>
                        <Typeography hover={true} color={"grey"}>
                          {el.text}
                        </Typeography>
                      </ListItem>
                    ))
                  : item.items.map((el, i) => {
                      return (
                        <ListItem p={"5px 0"} key={i}>
                          <Link to={el.link} className={styles["footer-link"]}>
                            {el.text}
                          </Link>
                        </ListItem>
                      );
                    })}
              </List>
            </div>
          );
        })}
      </Container>
      <Typeography color={"white"} mb={"10px"}>
        {t("copyright")} © {d} @LynadPro
      </Typeography>
    </footer>
  );
};
