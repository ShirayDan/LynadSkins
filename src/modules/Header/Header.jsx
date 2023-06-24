import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { changeOverflow } from "../../helpers/helpers";

import { Burger } from "./components/Burger";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { Button } from "../../ui/Button";
import { Modal } from "../../components/Modal/Modal";
import { SignInModal } from "../SignInModal";
import { SignUpModal } from "../SignUpModal";
import { Profile } from "./components/Profile";
import { Typeography } from "../../ui/Typeography";
import { Language } from "../../components/Language";
import { Currency } from "../../components/Currency";
import { DarkMode } from "../../components/DarkMode";

export const Header = ({ theme, setTheme, langFunc }) => {
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    changeOverflow(open);
  };

  const openSignUpModal = () => {
    setSignUpOpen(!signUpOpen);
    changeOverflow(signUpOpen);
  };

  return (
    <div className={styles.header}>
      <nav className={styles["nav-bar"]}>
        <List display={"flex"}>
          <ListItem style={styles.item}>
            {" "}
            <Link className={styles.link} to={"/"}>
              <Typeography variant={"h2"} fontSize={"20px"} color={"white"}>
                Lynad
                <Typeography
                  variant={"span"}
                  color={"purple"}
                  fontSize={"20px"}
                >
                  Skins
                </Typeography>
              </Typeography>
            </Link>
          </ListItem>
          <ListItem style={styles.item}>
            {" "}
            <Link className={styles.link} to={"/trade"}>
              Trade
            </Link>
          </ListItem>
          <ListItem style={styles.item}>
            {" "}
            <Link className={styles.link} to={"/market"}>
              Market
            </Link>
          </ListItem>
        </List>
      </nav>

      <div className={styles.burger}>
        <Burger theme={theme} setTheme={setTheme} langFunc={langFunc} />
      </div>
      <div className={styles.left}>
        <div className={styles.btns}>
          <Language langFunc={langFunc} />
          <Currency />
        </div>
        <DarkMode theme={theme} setTheme={setTheme} />
        {auth && <Profile />}
        {!auth && (
          <>
            <Button
              text={"Sign up"}
              style={styles.btn}
              hover={true}
              onClick={() => openSignUpModal()}
            ></Button>
            <Button
              text={"Sign in"}
              style={styles["btn-second"]}
              hover={true}
              onClick={() => handleClick()}
            ></Button>
          </>
        )}

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
