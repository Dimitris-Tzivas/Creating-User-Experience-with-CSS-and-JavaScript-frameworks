// Buttons
let blueBtn = document.querySelector(".blueBtn");
let btnText = document.querySelector(".btnText");

blueBtn.addEventListener("mousemove", (e) => {
  const { width, height } = e.currentTarget.getBoundingClientRect();
  blueBtn.style.transform = `translate3d(${(e.offsetX - width / 2) / 3}px, ${
    (e.offsetY - height / 2) / 3
  }px, 0px)`;
});

btnText.addEventListener("mousemove", (e) => {
  const { width, height } = e.currentTarget.getBoundingClientRect();
  btnText.style.transform = `translate3d(${(e.offsetX - width / 2) / 10}px, ${
    (e.offsetY - height / 2) / 5
  }px, 0px)`;
});

blueBtn.addEventListener("mouseout", (e) => {
  blueBtn.style.transform = "none";
  btnText.style.transform = "none";
});
