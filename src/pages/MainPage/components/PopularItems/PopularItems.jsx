import React from "react";
import styles from "./PopularItems.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Item } from "./components/Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import img1 from "./../../../../i/1.webp";
import img2 from "./../../../../i/2.webp";
import img3 from "./../../../../i/3.webp";
import img4 from "./../../../../i/4.webp";
import img5 from "./../../../../i/5.webp";
import img6 from "./../../../../i/6.png";
import img7 from "./../../../../i/7.webp";
import img8 from "./../../../../i/8.webp";
import img9 from "./../../../../i/9.webp";
import img10 from "./../../../../i/10.webp";
import { Typeography } from "../../../../ui/Typeography";
import { Container } from "../../../../ui/Container";
export const PopularItems = () => {
  const { t, i18n } = useTranslation();
  const data = [
    { img: img1, exterior: "Field-Tested", price: "13.30" },
    { img: img2, exterior: "Field-Tested", price: "38.24" },
    { img: img3, exterior: "Field-Tested", price: "34.91" },
    { img: img4, exterior: "Field-Tested", price: "31.04" },
    { img: img5, exterior: "Field-Tested", price: "23.98" },
    { img: img6, exterior: "Field-Tested", price: "48.02" },
    { img: img7, exterior: "Field-Tested", price: "22.72" },
    { img: img8, exterior: "Field-Tested", price: "29.98" },
    { img: img9, exterior: "Field-Tested", price: "47.11" },
    { img: img10, exterior: "Field-Tested", price: "61.70" },
  ];
  return (
    <Container styles={styles.container}>
      <div className={styles.titles}>
        <Typeography variant={"h2"} color={"white"}>
          {t("popular_items")}
        </Typeography>
        <Link to={"/market"}>
          {" "}
          <Typeography hover={true} variant={"h3"} color={"purple"}>
            {t("show_items")}
          </Typeography>
        </Link>
      </div>
      <Container styles={styles.itemsContainer}>
        <div className={styles.items}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={3}
            autoplay={true}
            breakpoints={{
              280: {
                slidesPerView: 1,
              },
              380: {
                slidesPerView: 2,
              },
              675: {
                slidesPerView: 3,
              },
              840: {
                slidesPerView: 4,
              },
              1050: {
                slidesPerView: 5,
              },
              1300: {
                slidesPerView: 6,
              },
              1540: {
                slidesPerView: 7,
              },
            }}
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide>
                  <Item
                    img={item.img}
                    exterior={item.exterior}
                    price={item.price}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </Container>
  );
};
