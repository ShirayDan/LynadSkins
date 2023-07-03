import React, { forwardRef } from "react";
import { motion } from "framer-motion";

export const Container = forwardRef(({ children, styles }, ref) => {
  let cl = "";
  if (styles) {
    cl += `${styles}`;
  }

  return (
    <div ref={ref} className={cl}>
      {children}
    </div>
  );
});
export const MContainer = motion(Container);
