import React, { useState } from "react";
import styles from "./Currency.module.css";
import { motion, AnimatePresence } from "framer-motion";

import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { Typeography } from "../../ui/Typeography";

import { FaChevronDown } from "react-icons/fa";
export const Currency = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const openModal = (val, setVal) => {
    setVal(!val);
  };
  return (
    <div className={styles["curr-cont"]}>
      <div
        className={styles.text}
        onClick={() => openModal(currencyOpen, setCurrencyOpen)}
      >
        <Typeography color={"white"} hover={true} icon={true}>
          Currency
          <div
            className={
              currencyOpen
                ? `${styles.icon} ${styles["icon-opened"]}`
                : styles.icon
            }
          >
            <FaChevronDown fontSize={"16px"} />
          </div>
        </Typeography>
      </div>
      <AnimatePresence initial={false}>
        {currencyOpen && (
          <motion.div
            className={styles.currency}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <List variant={"ul"}>
              <ListItem style={styles.item}>USD</ListItem>
              <ListItem style={styles.item}>UAH</ListItem>
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
