import React from "react";
import styles from "./MainPageTop.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { MTypeography } from "../../../../ui/Typeography";
import { MButton } from "../../../../ui/Button";
import { Knife } from "./components/Knife";
import { Container } from "../../../../ui/Container";

import img from "./../../../../i/karambit-1024.webp";
import img2 from "./../../../../i/balisong_icon.webp";
import img3 from "./../../../../i/m9.png";
import img4 from "./../../../../i/talon.png";

export const MainPageTop = () => {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();

  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const btnAnimation = {
    hidden: {
      x: -350,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  return (
    <>
      <Container styles={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.top}
        >
          <Knife
            name={"Butterfly Knife - Lore"}
            img={img}
            textStyle={"knifes-text"}
            lineStyle={"line-one"}
            imgStyles={styles.photo}
          />
          <Knife
            name={"Karambit - Fade"}
            img={img2}
            textStyle={"knifes-text"}
            lineStyle={"line-two"}
            imgStyles={styles.photo_second}
          />
          <Knife
            name={"Bayonet - Gamma Doppler Emerald"}
            img={img3}
            textStyle={"knifes-text_mod"}
            lineStyle={"line-three"}
            imgStyles={styles.photo_third}
          />
          <Knife
            name={" Talon Knife - Doppler Ruby"}
            img={img4}
            textStyle={"knifes-text_fourth"}
            lineStyle={"line-fourth"}
            imgStyles={styles.photo_fourth}
          />
          <div className={styles.title}>
            <MTypeography
              color={"white"}
              variants={textAnimation}
              custom={1}
              variant={"h1"}
            >
              {t("main_title")}
            </MTypeography>
          </div>
        </motion.div>
        <motion.div
          className={styles.subtitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MTypeography
            color={"grey"}
            custom={2}
            variants={textAnimation}
            variant={"h4"}
          >
            {t("footer_advantages")}
          </MTypeography>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MButton
            custom={2}
            variants={btnAnimation}
            hover={true}
            style={styles.btn}
            text={"Try Now"}
            onClick={() => nav("/trade")}
          ></MButton>
        </motion.div>
      </Container>
    </>
  );
};
