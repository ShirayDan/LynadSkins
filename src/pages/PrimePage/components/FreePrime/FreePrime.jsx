import React from "react";
import styles from "./FreePrime.module.css";
import { useTranslation } from "react-i18next";

import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";

export const FreePrime = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles["recomendation-cont"]}>
      <div className={styles["recomendation-image"]}>
        <div className={styles.recomendation}>
          <Typeography
            color={"white"}
            variant={"h3"}
            fontSize={"32px"}
            m={"0 0 10px 0"}
          >
            {t("prime_page.try_prime.title")}
          </Typeography>
          <Typeography m={"0 0 10px 0"} color={"grey"}>
            {t("prime_page.try_prime.text")}
          </Typeography>
          <Button
            hover={true}
            text={t("prime_page.try_free")}
            style={styles["free-btn"]}
          ></Button>
        </div>
      </div>
    </div>
  );
};
