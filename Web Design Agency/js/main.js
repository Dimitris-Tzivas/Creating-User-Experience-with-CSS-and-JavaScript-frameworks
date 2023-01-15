//Mouse
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

var cur = document.querySelector(".cursor");
var footer = document.querySelector(".footer");

window.addEventListener("mousemove", (e) => {
  gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
});

// Buttons
let customBlueBtn = document.querySelectorAll(".customBlueBtn");
let customWhiteBtn = document.querySelectorAll(".customWhiteBtn");
let blueBtnText = document.querySelectorAll(".blueBtnText");
let whiteBtnText = document.querySelectorAll(".whiteBtnText");
let footerLinks = document.querySelectorAll(".footer-link");

for (let i = 0; i < customBlueBtn.length; i++) {
  customBlueBtn[i].addEventListener("mousemove", (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    customBlueBtn[i].style.transform = `translate3d(${
      (e.offsetX - width / 2) / 3
    }px, ${(e.offsetY - height / 2) / 3}px, 0px)`;
    cur.style.width = "60px";
    cur.style.height = "60px";
    cur.style.backgroundColor = "#ffffffa8";
  });

  blueBtnText[i].addEventListener("mousemove", (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    blueBtnText[i].style.transform = `translate3d(${
      (e.offsetX - width / 2) / 10
    }px, ${(e.offsetY - height / 2) / 5}px, 0px)`;
  });

  customBlueBtn[i].addEventListener("mouseout", (e) => {
    customBlueBtn[i].style.transform = "none";
    blueBtnText[i].style.transform = "none";
    cur.style = "none";
  });
}

for (let i = 0; i < customWhiteBtn.length; i++) {
  customWhiteBtn[i].addEventListener("mousemove", (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    customWhiteBtn[i].style.transform = `translate3d(${
      (e.offsetX - width / 2) / 3
    }px, ${(e.offsetY - height / 2) / 3}px, 0px)`;
    cur.style.width = "60px";
    cur.style.height = "60px";
    cur.style.backgroundColor = "#2a00d438";
  });

  whiteBtnText[i].addEventListener("mousemove", (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    whiteBtnText[i].style.transform = `translate3d(${
      (e.offsetX - width / 2) / 10
    }px, ${(e.offsetY - height / 2) / 5}px, 0px)`;
  });

  customWhiteBtn[i].addEventListener("mouseout", (e) => {
    customWhiteBtn[i].style.transform = "none";
    whiteBtnText[i].style.transform = "none";
    cur.style = "none";
  });
}

//Footer
footer.addEventListener("mouseover", (e) => {
  cur.style.backgroundColor = "#ffffff";
});

footer.addEventListener("mouseleave", (e) => {
  cur.style.backgroundColor = "#2a00d4";
});

//FooterLinks
for (let i = 0; i < footerLinks.length; i++) {
  footerLinks[i].addEventListener("mousemove", (e) => {
    cur.style.width = "60px";
    cur.style.height = "60px";
    cur.style.backgroundColor = "#2a00d438";
  });

  footerLinks[i].addEventListener("mouseout", (e) => {
    cur.style = "none";
  });
}

// Burger menu
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const navigation_elements = document.querySelector(".navigation ul");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const burgerAnimation = document.getElementById("burgerAnimation");

let flag = true;

toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  cur.style.width = "60px";
  cur.style.height = "60px";
  cur.style.backgroundColor = "#2a00d438";

  setTimeout(clickInteraction, 300);

  if (flag === true) {
    animItem.playSegments([0, 17], true);
    flag = false;
    if (toggle.classList.contains("scrolled")) {
      toggle.style.backgroundColor = "#ffffff";
    }
  } else {
    animItem.playSegments([17, 32], true);
    flag = true;
    if (toggle.classList.contains("scrolled")) {
      toggle.style.backgroundColor = "#000000";
    }
  }
  if (navigation.classList.contains("active") === true) {
    navigation_elements.style.opacity = 1;
    navigation_elements.style.pointerEvents = "auto";
  } else {
    navigation_elements.style.opacity = 0;
    navigation_elements.style.pointerEvents = "none";
  }
});

const animItem = bodymovin.loadAnimation({
  wrapper: burgerAnimation,
  animType: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets8.lottiefiles.com/temp/lf20_Cal370.json",
});

function clickInteraction() {
  cur.style.width = "7px";
  cur.style.height = "7px";
  cur.style.backgroundColor = "#2a00d4";
}

//scroll
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st !== 0) {
      toggle.classList.add("scrolled");
      toggle.style.backgroundColor = "#000000";
      toggle.style.position = "fixed";
      toggle.style.right = "45px";
      toggle.style.top = "10px";
      if (flag === false) {
        toggle.style.backgroundColor = "#ffffff";
      } else {
        toggle.style.backgroundColor = "#000000";
      }
    } else if (st === 0) {
      toggle.classList.remove("scrolled");
      toggle.style.backgroundColor = "#ffffff";

      toggle.style.position = "relative";
      toggle.style.right = "0";
      toggle.style.top = "0";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
