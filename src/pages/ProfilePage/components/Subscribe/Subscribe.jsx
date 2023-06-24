import React from "react";
import styles from "./Subscribe.module.css";
import { useNavigate } from "react-router-dom";

import { Container } from "../../../../ui/Container";
import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";

export const Subscribe = () => {
  const nav = useNavigate();
  return (
    <Container>
      {" "}
      <Typeography
        fontSize={"24px"}
        variant={"h2"}
        m={"0 0 15px 0"}
        color={"white"}
      >
        Subscription
      </Typeography>
      <Typeography m={"0 0 15px 0"} color={"grey"}>
        You have no active subscriptions. You can learn more about the
        subscription in the Prime page.
      </Typeography>
      <Typeography m={"0 0 10px 0"} p={"0 0 20px 0"} color={"white"}>
        Now you can try five days free period.
      </Typeography>
      <Button
        hover={true}
        text={"Try now"}
        style={styles.btn}
        onClick={() => nav("/prime")}
      ></Button>
    </Container>
  );
};
