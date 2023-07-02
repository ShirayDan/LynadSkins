import React from "react";
import styles from "./Subscribe.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container } from "../../../../ui/Container";
import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";

export const Subscribe = () => {
  const nav = useNavigate();
  const { t } = useTranslation();
  return (
    <Container>
      {" "}
      <Typeography
        fontSize={"24px"}
        variant={"h2"}
        m={"0 0 15px 0"}
        color={"white"}
      >
        {t("personalPage.subscription")}
      </Typeography>
      <Typeography m={"0 0 15px 0"} color={"grey"}>
        {t("personalPage.subscription_text")}
      </Typeography>
      <Typeography m={"0 0 10px 0"} p={"0 0 20px 0"} color={"white"}>
        {t("personalPage.subscription_short")}
      </Typeography>
      <Button
        hover={true}
        text={t("personalPage.try_now")}
        style={styles.btn}
        onClick={() => nav("/prime")}
      ></Button>
    </Container>
  );
};
