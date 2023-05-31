import React from "react";
import styles from "./Footer.module.css";
import { Typeography } from "../../ui/Typeography";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { Container } from "../../ui/Container";
export const Footer = () => {
  const d = new Date().getFullYear();
  const social = [1, 2, 3, 4];
  const data = [
    { title: "Company", items: ["About Us", "Service", "Blog", "Contact"] },
    {
      title: "Support",
      items: ["Comunity", "Faqs", "Privacy Policy", "Resources"],
    },
    {
      title: "Get in Touch",
      items: [
        "LynadSkins@gmail.com",
        "+(642)34276244",
        " 442 Belle Terre St Floor 7, San Francisco, AV 4206",
      ],
    },
  ];
  // prime,
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
            Buy, sell, and trade skins easier and faster. All deals are secured
            with the highest level protection methods.
          </Typeography>
          <List variant={"ul"} mt={"25px"}>
            {social.map((item, i) => {
              return (
                <ListItem style={styles.socialItem}>
                  {" "}
                  <a href="" className={styles.link}>
                    {item}
                  </a>
                </ListItem>
              );
            })}
          </List>
        </div>
        {data.map((item, i) => {
          return (
            <div className={styles.item}>
              <Typeography variant={"h3"} p={"0 0 15px 0"} color={"white"}>
                {item.title}
              </Typeography>
              <List>
                {item.items.map((el, i) => {
                  return (
                    <ListItem p={"5px 0"}>
                      <Typeography color={"lightGrey"}>{el}</Typeography>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          );
        })}
      </Container>
      <Typeography color={"white"} mb={"10px"}>
        Copyright © {d} @LynadPro
      </Typeography>
    </footer>
  );
};
