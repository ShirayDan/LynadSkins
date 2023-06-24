import React from "react";
import styles from "./MainPageTop.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import img from "./../../../../i/karambit-1024.webp";
import img2 from "./../../../../i/balisong_icon.webp";
import img3 from "./../../../../i/m9.png";
import img4 from "./../../../../i/talon.png";
import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";
import { Knife } from "./components/Knife";
import { Container } from "../../../../ui/Container";

export const MainPageTop = () => {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();
  return (
    <>
      <Container styles={styles.container}>
        <div className={styles.top}>
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
            <Typeography color={"white"} variant={"h1"}>
              {t("main_title")}
            </Typeography>
          </div>
        </div>
        <div className={styles.subtitle}>
          <Typeography color={"grey"} variant={"h4"}>
            {t("footer_advantages")}
          </Typeography>
        </div>
        <Button
          hover={true}
          style={styles.btn}
          text={"Try Now"}
          onClick={() => nav("/trade")}
        ></Button>
      </Container>
    </>
  );
};
