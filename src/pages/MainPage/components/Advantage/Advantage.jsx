import React from "react";
import { AdvantageItem } from "./AdvantageItem/AdvantageItem";
import { Container } from "../../../../ui/Container";
import styles from "./Advantage.module.css";
export const Advantage = () => {
  const text = [
    { title: "35%", text: "Bonus for top up balance" },
    { title: "80 K", text: "CS items on our website" },
    { title: "30 sec", text: "From logging in to making a purchase" },
    {
      title: "24/7",
      text: "Online support, response time less than 5 minutes",
    },
  ];
  return (
    <Container styles={styles.container}>
      {text.map((item, i) => {
        return <AdvantageItem title={item.title} text={item.text} />;
      })}
    </Container>
  );
};
