import React from "react";
import styles from "./Cart.module.css";

import { EmptyCart } from "./components/EmptyCart";
import { CartItem } from "./components/CartItem";
import { Button } from "../../../../ui/Button";
import { Container } from "../../../../ui/Container";
import { Typeography } from "../../../../ui/Typeography";
import img1 from "../../../../i/1.webp";

const data = [
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
  {
    id: 1,
    item: "AK-47",
    skin: "Elite Build",
    img: img1,
    exterior: "Field-Tested",
    rarity: "Mil-Spec Grade",
    price: 13.3,
    float: 0.210546776,
    statTrak: true,
    souvenir: false,
    type: "Assault Rifles",
    color: ["black"],
  },
];
export const Cart = () => {
  return (
    <Container styles={styles.container}>
      {data.length ? (
        <>
          <Typeography m={"0 0 10px 0"} fontSize={"22px"} color={"white"}>
            Cart
          </Typeography>
          <div className={styles.items}>
            {data.map((item) => (
              <CartItem
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
          <div className={styles.btns}>
            <Button text={"Buy"} style={styles.btn} />
            <Button text={"Empty Cart"} style={styles.btn} />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};
