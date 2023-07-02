import React from "react";
import styles from "./Search.module.css";

import { Input } from "../../../../ui/Input";
import { Container } from "../../../../ui/Container";
import { Button } from "../../../../ui/Button";
import { Typeography } from "../../../../ui/Typeography";

import img1 from "./../../../../i/1.webp";

export const Search = () => {
  return (
    <Container styles={styles.container}>
      <div className={styles.top}>
        <Input width={"100%"} />
        <Button text={"Find"} style={styles.btn} />
      </div>
      <div className={styles.result}>
        <div className={styles.item}>
          <div className={styles.left}>
            {" "}
            <img src={img1} alt="" className={styles.img} />
            <div className={styles.text}>
              <Typeography fontSize={"14px"} color={"white"}>
                AK-47
              </Typeography>
              <Typeography fontSize={"14px"} color={"white"}>
                Elite Build
              </Typeography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
