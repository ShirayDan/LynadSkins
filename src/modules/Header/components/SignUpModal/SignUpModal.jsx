import React from "react";
import styles from "./SignUpModal.module.css";
import { Input } from "../../../../ui/Input";
import { Container } from "../../../../ui/Container";
import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";
export const SignUpModal = () => {
  return (
    <>
      <Container styles={styles.container}>
        <Typeography variant={"h3"} color={"white"} mb={"15px"}>
          {" "}
          Sign up to your account
        </Typeography>
        <Input
          width={"400px"}
          placeholder={"Enter your name"}
          type={"email"}
          mb={"10px"}
        />
        <Input
          width={"400px"}
          placeholder={"Enter your email"}
          type={"email"}
          mb={"10px"}
        />
        <Input
          width={"400px"}
          placeholder={"Enter your password"}
          type={"password"}
        />
        <Button style={styles.btn} text={"Sign up"}></Button>
      </Container>
    </>
  );
};
