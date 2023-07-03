import React from "react";
import styles from "./PrimePageTop.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { MTypeography } from "../../../../ui/Typeography";

export const PrimePageTop = ({ ref }) => {
  const { t, i18n } = useTranslation();

  let id = window.innerWidth > 1050 ? "tablePC" : "table";

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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles["premium-top"]}
    >
      <MTypeography
        variant={"h1"}
        custom={1}
        variants={textAnimation}
        m={"0 0 15px 0"}
        textAlign={"center"}
        fontSize={"60px"}
        color={"white"}
      >
        {t("prime_page.title")}
      </MTypeography>
      <MTypeography
        variant={"h2"}
        custom={2}
        variants={textAnimation}
        m={"0 0 15px 0"}
        color={"grey"}
        textAlign={"center"}
        fontSize={"24px"}
        className={styles.subtitle}
      >
        {t("prime_page.subtitle")}
      </MTypeography>
      <motion.div custom={3} variants={textAnimation} className={styles.btns}>
        <Link
          to={id}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.link}
        >
          {t("prime_page.try_free")}
        </Link>
      </motion.div>
    </motion.div>
  );
};
