const button = document.querySelector("#button-share")
const toolTip = document.querySelector(".tool-tip")
const toolTip2 = document.querySelector(".tool-tip2")
const buttonClose = document.querySelector(".tooltip-close")
const triangle = document.querySelector(".demo-arrow-down")
const right = document.querySelector(".right")
let count = 0;
const container = document.querySelector(".container-flex")


button.addEventListener("click", (e) => {

  count += 1;

  if (right.offsetWidth <= 400 && count % 2 === 1) {
    toolTip2.style.display = "flex";
    toolTip.style.display = "none";
    triangle.style.display = "none";

  } else if (right.offsetWidth >= 500 && count % 2 === 1) {
    toolTip2.style.display = "none";
    toolTip.style.display = "flex"
    triangle.style.display = "flex"

  } else {
    toolTip2.style.display = "none"
    toolTip.style.display = "none"
    triangle.style.display = "none"
  }

  console.log(right.offsetWidth);
  console.log(count);
});