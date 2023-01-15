//Auto scroll button
const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.pointerEvents = "auto";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.pointerEvents = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// Burger menu
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const burgerAnimation = document.getElementById("burgerAnimation");
const items = document.querySelector(".items");

let flag = true;

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");

  if (flag === true) {
    animItem.setDirection(-1);
    animItem.playSegments([0, 25], true);
    // animItem.goToAndStop(25, true);
    flag = false;
  } else {
    animItem.setDirection(-1);
    animItem.goToAndPlay(20, true);
    flag = true;
  }
});

const animItem = bodymovin.loadAnimation({
  wrapper: burgerAnimation,
  animType: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets2.lottiefiles.com/packages/lf20_r1OnTJ.json",
});

function myFunction(x) {
  if (x.matches && flag === false) {
    // If media query matches (auto closing sidebar)
    animItem.setDirection(1);
    animItem.playSegments([0, 25], true);
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    flag = true;
  } else {
    animItem.setDirection(-1);
    animItem.goToAndPlay(20, true);
  }
}

var x = window.matchMedia("(min-width: 575px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
