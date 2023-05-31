import React from "react";

export const ListItem = ({
  children,
  display,
  justifyContent,
  mt,
  mb,
  mr,
  ml,
  m,
  pr,
  pt,
  pb,
  pl,
  p,
  style,
  bg,
  w,
  h,
  borderRadius,
  position,
  rotate,
}) => {
  let cl = "";
  if (style) {
    cl += `${style}`;
  }
  return (
    <li
      style={{
        display,
        justifyContent,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        margin: m,
        paddingRight: pr,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        padding: p,
        background: bg,
        width: w,
        height: h,
        borderRadius,
        position,
        rotate,
      }}
      className={cl}
    >
      {children}
    </li>
  );
};
