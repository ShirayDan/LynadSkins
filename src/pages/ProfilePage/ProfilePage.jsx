import React, { useEffect, useState } from "react";
import styles from "./ProfilePage.module.css";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "../../redux/slices/auth";
import axios from "../../axios";

import { Container } from "../../ui/Container";
import { Typeography } from "../../ui/Typeography";
import { Subscribe } from "./components/Subscribe";
import { ProfileInfo } from "./components/ProfileInfo";
import { GeneralInfo } from "./components/GeneralInfo";
import { ContactInfo } from "./components/ContactInfo";
import { Background } from "./components/Background";
import { MarketPageItems } from "./../../modules/MarketPageItems";

export const ProfilePage = () => {
  const isAuth = useSelector(selectIsAuth);
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios.get("/auth/me", token).then((res) => {
      setData(res.data);
    });
  }, []);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

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
          <ProfileInfo data={data}></ProfileInfo>
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
