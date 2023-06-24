import React from "react";
import styles from "./AdvantagesSlider.module.css";
import { useTranslation } from "react-i18next";

import { Typeography } from "../../../../ui/Typeography";
import { Container } from "../../../../ui/Container";
import { AdvantageSliderItems } from "./components/AdvantagesSliderItems";
export const AdvantagesSlider = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      title: t("advantage_slider.one.title"),
      text: t("advantage_slider.one.text"),
      advantages: [
        t("advantage_slider.one.advantages.one"),
        t("advantage_slider.one.advantages.two"),
      ],
    },
    {
      title: t("advantage_slider.two.title"),
      text: t("advantage_slider.two.text"),
      advantages: [
        t("advantage_slider.two.advantages.one"),
        t("advantage_slider.two.advantages.two"),
        t("advantage_slider.two.advantages.three"),
      ],
    },
    {
      title: t("advantage_slider.three.title"),
      text: t("advantage_slider.three.text"),
      advantages: [
        t("advantage_slider.three.advantages.one"),
        t("advantage_slider.three.advantages.two"),
      ],
    },
    {
      title: t("advantage_slider.four.title"),
      text: t("advantage_slider.four.text"),
      advantages: [
        t("advantage_slider.four.advantages.one"),
        t("advantage_slider.four.advantages.two"),
        t("advantage_slider.four.advantages.three"),
      ],
    },
  ];
  return (
    <Container styles={styles.container}>
      <Typeography color={"white"} variant={"h2"}>
        {t("our_advantages")}
      </Typeography>

      <div className={styles.items}>
        {data.map((item, i) => {
          return <AdvantageSliderItems content={item} />;
        })}
      </div>
    </Container>
  );
};
