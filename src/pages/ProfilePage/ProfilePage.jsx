import React from "react";
import styles from "./ProfilePage.module.css";
import { useTranslation } from "react-i18next";

import { Container } from "../../ui/Container";
import { Typeography } from "../../ui/Typeography";
import { Subscribe } from "./components/Subscribe";
import { ProfileInfo } from "./components/ProfileInfo";
import { GeneralInfo } from "./components/GeneralInfo";
import { ContactInfo } from "./components/ContactInfo";
import { Background } from "./components/Background";
import { MarketPageItems } from "./../../modules/MarketPageItems";

export const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <Container styles={styles.container}>
      <Typeography
        variant={"h1"}
        fontSize={"32px"}
        color={"white"}
        m={"0 0 20px 10px"}
      >
        {t("personalPage.personal_info")}
      </Typeography>
      <div className={styles.top}>
        <Background>
          <ProfileInfo></ProfileInfo>
        </Background>
        <Background>
          <Subscribe></Subscribe>
        </Background>
      </div>
      <div className={styles.top}>
        <Background>
          <GeneralInfo></GeneralInfo>
        </Background>
        <Background>
          <ContactInfo></ContactInfo>
        </Background>
      </div>
      <Typeography
        variant={"h1"}
        fontSize={"32px"}
        color={"white"}
        m={"0 0 20px 10px"}
      >
        {t("personalPage.your_inventory")}
      </Typeography>
      <MarketPageItems />
    </Container>
  );
};
