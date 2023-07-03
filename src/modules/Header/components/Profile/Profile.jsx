import React, { useState } from "react";
import styles from "./Profile.module.css";
import { AnimatePresence } from "framer-motion";

import { ProfileList } from "./components/ProfileList";

import img from "../../../../i/flag-punisher.jpg";

export const Profile = () => {
  const [smallModal, setSmallModal] = useState(false);
  return (
    <div>
      <div className={styles.icon} onClick={() => setSmallModal(!smallModal)}>
        <img src={img} alt="" className={styles.img} />
        <AnimatePresence initial={false}>
          {smallModal && <ProfileList />}
        </AnimatePresence>
      </div>
    </div>
  );
};
