import React from "react";
import styles from "./SmallModalInner.module.css";

import { SmallItem } from "../SmallItem";
import { Container } from "../../ui/Container";
import { Typeography } from "../../ui/Typeography";

export const SmallModalInner = ({ data, type }) => {
  return (
    <Container styles={styles.container}>
      <Typeography m={"0 0 10px 0"} fontSize={"22px"} color={"white"}>
        {type}
      </Typeography>
      <div className={styles.items}>
        {data?.map((item, i) => (
          <SmallItem
            key={i}
            img={item.img}
            exterior={item.exterior}
            price={item.price}
            float={item.float}
            statTrak={item.statTrak}
            souvenir={item.souvenir}
            item={item.item}
            skin={item.skin}
          />
        ))}
      </div>
    </Container>
  );
};
