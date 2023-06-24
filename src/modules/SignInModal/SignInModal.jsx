import React, { useState } from "react";
import styles from "./SingInModal.module.css";
import { useForm } from "react-hook-form";

import { Input } from "../../ui/Input";
import { Container } from "../../ui/Container";
import { Typeography } from "../../ui/Typeography";

export const SignInModal = () => {
  const [viewPass, setViewPass] = useState("password");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const changeView = () => {
    viewPass == "password" ? setViewPass("text") : setViewPass("password");
  };
  return (
    <>
      <Container styles={styles.container}>
        <Typeography variant={"h3"} color={"white"} m={"0 0 15px 0 "}>
          {" "}
          Sign in to your account
        </Typeography>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <label htmlFor="Email" className={styles.label}>
            Email:
            <Input
              type={"email"}
              placeholder={"Email"}
              obj={register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              mt={"5px"}
            />
          </label>
          <div>
            {errors?.firstName && (
              <p>{errors?.firstName?.message || "Error one"}</p>
            )}
          </div>
          <label htmlFor="Password" className={styles.label}>
            Password:
            <div className={styles.password}>
              <Input
                type={viewPass}
                placeholder={"Password"}
                obj={register("Password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
                mt={"5px"}
              />
              <span className={styles.icon} onClick={changeView}>
                0
              </span>
            </div>
          </label>
          <div>
            {errors?.secondName && (
              <p>{errors?.secondName?.message || "Error two"}</p>
            )}
          </div>
          <div className={styles.controls}>
            <Input
              type={"submit"}
              mt={"10px"}
              value={"Sing UP"}
              disabled={!isValid}
            />

            <Input type={"reset"} value={"Reset"} mt={"10px"} />
          </div>
        </form>
      </Container>
    </>
  );
};
