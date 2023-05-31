import React, { Component } from "react";
import styles from "./Typeography.module.css";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
  span: "span",
};

export const Typeography = ({
  variant,
  color,
  children,
  before,
  after,
  p,
  mt,
  mb,
  m,
  fontSize,
}) => {
  const Component = variant ? variantsMapping[variant] : "p";
  let cl = "";
  if (variant) {
    cl += `${styles[variant]}`;
  }
  if (color) {
    cl += ` ${styles[color]}`;
  }
  if (before) {
    cl += ` ${styles[before]}`;
  }
  if (after) {
    cl += ` ${styles[after]}`;
  }

  return (
    <Component
      className={cl}
      style={{
        padding: p,
        marginTop: mt,
        marginBottom: mb,
        margin: m,
        fontSize,
      }}
    >
      {children}
    </Component>
  );
};
