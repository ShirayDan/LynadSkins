import React from "react";
import { MTypeography } from "../../../../../ui/Typeography";
import { motion } from "framer-motion";
export const AdvantageItem = ({ title, text }) => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MTypeography
        variants={textAnimation}
        custom={1}
        color={"white"}
        variant={"h2"}
        after={"title"}
      >
        {title}
      </MTypeography>
      <MTypeography variants={textAnimation} custom={1} color={"grey"}>
        {text}
      </MTypeography>
    </motion.div>
  );
};
