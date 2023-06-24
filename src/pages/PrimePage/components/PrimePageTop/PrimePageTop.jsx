import React from "react";
import styles from "./PrimePageTop.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";

export const PrimePageTop = ({ ref }) => {
  const { t, i18n } = useTranslation();

  let id = window.innerWidth > 1050 ? "tablePC" : "table";

  return (
    <div className={styles["premium-top"]}>
      <Typeography
        variant={"h1"}
        m={"0 0 15px 0"}
        textAlign={"center"}
        fontSize={"60px"}
        color={"white"}
      >
        {t("prime_page.title")}
      </Typeography>
      <Typeography
        variant={"h2"}
        m={"0 0 15px 0"}
        color={"grey"}
        textAlign={"center"}
        fontSize={"24px"}
        className={styles.subtitle}
      >
        {t("prime_page.subtitle")}
      </Typeography>
      <div className={styles.btns}>
        <Link
          to={id}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.link}
        >
          {t("prime_page.try_free")}
        </Link>
      </div>
    </div>
  );
};
