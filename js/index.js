var element = document.getElementById("nav");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    element.classList.add("fixed");
  } else {
    element.classList.remove("fixed");
  }
};

const lis = document.querySelectorAll(".food ul li");
const boxes = document.querySelectorAll(".box");
const modal = document.querySelector(".modal");
const img = document.querySelector(".modalImg");
const closeDiv = document.querySelector(".close");
const prev = document.querySelector(".modal .previous");
const next = document.querySelector(".modal .next");

boxes.forEach((box, ind) => {
  box.addEventListener("click", () => {
    modal.classList.add("appear");
    img.src = box.querySelector(".box .img-fluid").src;

    prev.addEventListener("click", () => {
      console.log(boxes[ind--]);
      img.src = boxes[ind--].querySelector(".box .img-fluid").src;
    });
    next.addEventListener("click", () => {
      console.log(boxes[ind++]);
      img.src = boxes[ind++].querySelector(".box .img-fluid").src;
    });
  });
  closeDiv.addEventListener("click", () => {
    modal.classList.remove("appear");
  });
});

lis.forEach(function (el) {
  el.onclick = function () {
    boxes.forEach(function (box) {
      if (el.getAttribute("data-food") === box.getAttribute("data-order")) {
        box.parentElement.classList.add("block");
        box.parentElement.classList.remove("none");
      } else if (el.getAttribute("data-food") === "all") {
        box.parentElement.classList.add("block");
        box.parentElement.classList.remove("none");
      } else {
        box.parentElement.classList.add("none");
        box.parentElement.classList.remove("block");
      }
      console.log(box.parentElement);
    });
    console.log(el.getAttribute("data-food"));
    lis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});
