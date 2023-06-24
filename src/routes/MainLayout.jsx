import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./../pages/Layout";
import { MainPage } from "./../pages/MainPage";
import { MarketPage } from "./../pages/MarketPage";
import { ChangePage } from "./../pages/ChangePage";
import { PrimePage } from "./../pages/PrimePage";
import { ProfilePage } from "./../pages/ProfilePage";
import { Nopage } from "./../pages/Nopage";
export const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="trade" element={<ChangePage />} />
          <Route path="prime" element={<PrimePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
