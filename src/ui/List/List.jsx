import React, { Component } from "react";

const variantsMapping = {
  div: "div",
  ul: "ul",
};

export const List = ({
  children,
  variant,
  display,
  alignItems,
  justifyContent,
  mt,
  mb,
  columns,
  gap,
}) => {
  const Component = variant ? variantsMapping[variant] : "div";

  return (
    <Component
      style={{
        display,
        alignItems,
        justifyContent,
        marginTop: mt,
        marginBottom: mb,
        gridTemplateColumns: columns,
        gridGap: gap,
      }}
    >
      {children}
    </Component>
  );
};
