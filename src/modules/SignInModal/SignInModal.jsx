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
                {viewPass == "password" ? (
                  <svg width="24" height="24" viewBox="0 0 512 512">
                    <path d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z" />
                    <path d="M248,315.85l-51.79-51.79a2,2,0,0,0-3.39,1.69,64.11,64.11,0,0,0,53.49,53.49A2,2,0,0,0,248,315.85Z" />
                    <path d="M264,196.15,315.87,248a2,2,0,0,0,3.4-1.69,64.13,64.13,0,0,0-53.55-53.55A2,2,0,0,0,264,196.15Z" />
                    <path d="M491,273.36a32.2,32.2,0,0,0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.68,96a226.54,226.54,0,0,0-71.82,11.79,4,4,0,0,0-1.56,6.63l47.24,47.24a4,4,0,0,0,3.82,1.05,96,96,0,0,1,116,116,4,4,0,0,0,1.05,3.81l67.95,68a4,4,0,0,0,5.4.24A343.81,343.81,0,0,0,491,273.36Z" />
                    <path d="M256,352a96,96,0,0,1-93.3-118.63,4,4,0,0,0-1.05-3.81L94.81,162.69a4,4,0,0,0-5.41-.23c-24.39,20.81-47,46.13-67.67,75.72a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.39,76.14,98.28,100.65C162.06,402,207.92,416,255.68,416a238.22,238.22,0,0,0,72.64-11.55,4,4,0,0,0,1.61-6.64l-47.47-47.46a4,4,0,0,0-3.81-1.05A96,96,0,0,1,256,352Z" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="64" />
                    <path d="M490.84,238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.66,96c-42.52,0-84.33,12.15-124.27,36.11C90.66,156.54,53.76,192.23,21.71,238.18a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.4,76.14,98.28,100.65C162,402,207.9,416,255.66,416c46.71,0,93.81-14.43,136.2-41.72,38.46-24.77,72.72-59.66,99.08-100.92A32.2,32.2,0,0,0,490.84,238.6ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z" />
                  </svg>
                )}
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
