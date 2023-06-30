import React, { useState } from "react";
import styles from "./PersonalPage.module.css";
import { useTranslation } from "react-i18next";
import { changeOverflow } from "../../../../helpers/helpers";

import { Container } from "../../../../ui/Container";
import { Typeography } from "../../../../ui/Typeography";
import { Button } from "../../../../ui/Button";
import { Modal } from "../../../../components/Modal";
import { SignInModal } from "../../../../modules/SignInModal";
import { SignUpModal } from "../../../../modules/SignUpModal";

import { FaExclamationTriangle } from "react-icons/fa";

export const PersonalPage = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    changeOverflow(open);
  };

  const openSignUpModal = () => {
    setSignUpOpen(!signUpOpen);
    changeOverflow(signUpOpen);
  };
  return (
    <Container className={styles.container}>
      <div className={styles.unauth}>
        <div>
          <FaExclamationTriangle fontSize={"16px"} fill="red" />
        </div>
        <Typeography
          mb={"10px"}
          color={"white"}
          variant={"h3"}
          fontSize={"28px"}
        >
          {t("not_authorized")}
        </Typeography>
        <div className={styles.btns}>
          <Button
            text={"Sign up"}
            style={styles.btn}
            hover={true}
            onClick={() => openSignUpModal()}
          ></Button>
          <Button
            text={"Sign in"}
            style={styles.btn}
            hover={true}
            onClick={() => handleClick()}
          ></Button>
        </div>

        {open && (
          <Modal children={<SignInModal />} handleClick={() => handleClick()} />
        )}
        {signUpOpen && (
          <Modal
            children={<SignUpModal />}
            handleClick={() => openSignUpModal()}
          />
        )}
      </div>
    </Container>
  );
};
