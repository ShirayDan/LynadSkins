import React from "react";
import { Typeography } from "../../../../../ui/Typeography";
export const AdvantageItem = ({ title, text }) => {
  return (
    <div>
      <Typeography color={"white"} variant={"h2"} after={"title"}>
        {title}
      </Typeography>
      <Typeography color={"grey"}>{text}</Typeography>
    </div>
  );
};
