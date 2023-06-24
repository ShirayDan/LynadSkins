import React, { useState } from "react";
import styles from "./Profile.module.css";
import img from "../../../../i/flag-punisher.jpg";

import { ProfileList } from "./components/ProfileList";
export const Profile = () => {
  const [smallModal, setSmallModal] = useState(false);
  return (
    <div>
      <div className={styles.icon} onClick={() => setSmallModal(!smallModal)}>
        <img src={img} alt="" className={styles.img} />
        {smallModal && <ProfileList />}
      </div>
    </div>
  );
};
