import React from "react";
import styles from "./AdvantagesSlider.module.css";
import { Typeography } from "../../../../ui/Typeography";
import { Container } from "../../../../ui/Container";
import { AdvantageSliderItems } from "./components/AdvantagesSliderItems";
export const AdvantagesSlider = () => {
  const data = [
    {
      title: "Store",
      text: "Our Store mode makes the items buying process easier and faster.",
      advantages: [
        "Items with a 23% discount",
        "Ability to buy without Steam Guard and with any Steam level",
      ],
    },
    {
      title: "Trade",
      text: "Improved trade interface. Now faster and more user-friendly:",
      advantages: [
        "Upgraded search filters",
        "Cart interface added",
        "More detailed skin cards",
      ],
    },
    {
      title: "Personal account",
      text: "Added some more advantages like: ",
      advantages: ["Easy access", "Personalized experience"],
    },
    {
      title: "Different statuses",
      text: "Our webpage has 3 statuses: ",
      advantages: ["Basic", "Prime", "Trader +"],
    },
  ];
  return (
    <Container styles={styles.container}>
      <Typeography color={"white"} variant={"h2"}>
        Our advantages
      </Typeography>

      <div className={styles.items}>
        {data.map((item, i) => {
          return <AdvantageSliderItems content={item} />;
        })}
      </div>
    </Container>
  );
};
