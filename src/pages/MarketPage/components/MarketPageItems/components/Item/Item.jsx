import React, { useState } from "react";
import styles from "./Item.module.css";
import { ItemModal } from "../../../../../../components/ItemModal";
import { Typeography } from "../../../../../../ui/Typeography";
import { Button } from "../../../../../../ui/Button";
export const Item = ({
  img,
  exterior,
  price,
  float,
  statTrak,
  souvenir,
  item,
  skin,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    if (open == false) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "initial";
    }
  };
  return (
    <>
      <div className={styles.item} onClick={() => handleClick()}>
        <img src={img} alt="" className={styles.photo} />
        <div className={styles.description}>
          <Typeography variant={"h3"} fontSize={"16px"} color={"lightGrey"}>
            <Typeography variant={"span"} color={"gold"} fontSize={"16px"}>{`${
              souvenir == true ? "SV " : ""
            }`}</Typeography>
            <Typeography variant={"span"} fontSize={"16px"}>{`${
              souvenir == true ? "/ " : ""
            }`}</Typeography>
            <Typeography
              variant={"span"}
              fontSize={"16px"}
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
        <Button
          style={styles.btn}
          text={<div className={styles.icon}></div>}
        ></Button>
      </div>
      {open && (
        <ItemModal
          img={img}
          handleClick={handleClick}
          statTrak={statTrak}
          souvenir={souvenir}
          item={item}
          skin={skin}
          exterior={exterior}
          price={price}
          float={float}
        />
      )}
    </>
  );
};
