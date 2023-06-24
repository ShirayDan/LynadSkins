import React from "react";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";

import { Outlet } from "react-router-dom";
import { Header } from "../../modules/Header";
import { Footer } from "../../modules/Footer";

export const Layout = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const { t, i18n } = useTranslation();
  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} langFunc={i18n} />
      <Outlet />
      <Footer />
    </div>
  );
};
