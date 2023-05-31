import React from "react";

export const Container = ({ children, styles }) => {
  let cl = "";
  if (styles) {
    cl += `${styles}`;
  }

  return <div className={cl}>{children}</div>;
};
