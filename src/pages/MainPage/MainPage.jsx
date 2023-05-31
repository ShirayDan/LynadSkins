import React from "react";
import { Advantage } from "./components/Advantage";
import { MainPageTop } from "./components/MainPageTop";
import { AdvantagesSlider } from "./components/AdvantagesSlider/AdvantagesSlider";
import { PopularItems } from "./components/PopularItems/PopularItems";
export const MainPage = () => {
  return (
    <>
      <MainPageTop />
      <Advantage />
      <PopularItems />
      <AdvantagesSlider />
    </>
  );
};
