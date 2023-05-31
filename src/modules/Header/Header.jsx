import { useState } from "react";
import styles from "./Header.module.css";

import { Burger } from "./components/Burger";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { Button } from "../../ui/Button";
import { Modal } from "../../components/Modal/Modal";
import { SignInModal } from "./components/SignInModal";
import { SignUpModal } from "./components/SignUpModal";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    if (open == false) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "initial";
    }
  };
  const openSignUpModal = () => {
    setSignUpOpen(!signUpOpen);
    if (open == false) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "initial";
    }
  };
  return (
    <div className={styles.header}>
      <nav className={styles["nav-bar"]}>
        <List display={"flex"}>
          <ListItem style={styles.item}>
            {" "}
            <a href="" className={styles.link}>
              Trade
            </a>
          </ListItem>
          <ListItem style={styles.item}>
            {" "}
            <a href="" className={styles.link}>
              Market
            </a>
          </ListItem>
        </List>
      </nav>

      <div className={styles.burger}>
        <Burger />
      </div>
      <div>
        <Button
          text={"Sign in"}
          style={styles.btn}
          onClick={() => handleClick()}
        ></Button>
        <Button
          text={"Sign up"}
          style={styles["btn-second"]}
          onClick={() => openSignUpModal()}
        ></Button>
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
    </div>
  );
};
