export const changeOverflow = (val) => {
  console.log(val);
  if (val == false) {
    document.querySelector("html").style.overflowY = "hidden";
  } else {
    document.querySelector("html").style.overflowY = "scroll";
  }
};
