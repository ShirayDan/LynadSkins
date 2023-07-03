import React from "react";
import styles from "./ProfileList.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { List } from "../../../../../../ui/List";
import { ListItem } from "../../../../../../ui/ListItem";
import { Typeography } from "../../../../../../ui/Typeography";

export const ProfileList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.list}
    >
      <List>
        <ListItem m={"0 0 5px 0"}>
          {" "}
          <Link to={"/profile"}>
            {" "}
            <Typeography color={"white"}>Personal area</Typeography>
          </Link>
        </ListItem>
        <ListItem m={"0 0 5px 0"}>Support</ListItem>
        <ListItem>Log out</ListItem>
      </List>
    </motion.div>
  );
};
