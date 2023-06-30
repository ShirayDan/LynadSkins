import React from "react";
import styles from "./CartItem.module.css";

import { Container } from "./../../../../../../ui/Container";
import { Typeography } from "../../../../../../ui/Typeography";

import { FaTrash } from "react-icons/fa";

export const CartItem = ({
  img,
  exterior,
  price,
  float,
  statTrak,
  souvenir,
  item,
  skin,
}) => {
  return (
    <Container>
      <div className={styles.item}>
        <div className={styles.left}>
          <img src={img} alt={`${item}-${skin}`} className={styles.photo} />
          <div className={styles.description}>
            <Typeography variant={"h3"} fontSize={"12px"} color={"white"}>
              {item}
            </Typeography>
            <Typeography variant={"h4"} fontSize={"12px"} color={"white"}>
              {skin + " (" + exterior + ")"}
            </Typeography>
            <Typeography fontSize={"12px"} color={"grey"}>
              <Typeography
                variant={"span"}
                color={"gold"}
                fontSize={"12px"}
              >{`${souvenir == true ? "SV " : ""}`}</Typeography>
              <Typeography variant={"span"} fontSize={"12px"}>{`${
                souvenir == true ? "/ " : ""
              }`}</Typeography>
              <Typeography
                variant={"span"}
                fontSize={"12px"}
                color={"orange"}
              >{`${statTrak == true ? "ST " : ""}`}</Typeography>
              {statTrak == true
                ? `/ ${exterior
                    .replace(/([-])/g, " ")
                    .replace(/([a-z," "])/g, "")} / ${float
                    .toString()
                    .substring(0, 4)}`
                : `${exterior
                    .replace(/([-])/g, " ")
                    .replace(/([a-z," "])/g, "")} / ${float
                    .toString()
                    .substring(0, 4)}`}
            </Typeography>
            <Typeography color={"white"} fontSize={"16px"}>{`$ ${price.toFixed(
              2
            )}`}</Typeography>
          </div>
        </div>

        <div className={styles.bucket}>
          <FaTrash fontSize={"14px"} fill="white" />
        </div>
      </div>
    </Container>
  );
};
