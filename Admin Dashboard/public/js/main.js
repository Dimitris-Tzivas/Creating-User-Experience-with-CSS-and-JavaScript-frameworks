// Initializations Start---------------------------------------------------

// Navbar
const arrowDown = document.querySelector(".arrow-down");

// Person DropDown Menu
const profileBtn = document.querySelector(".profile-drop-btn");
const arrowDownProfile = document.querySelector(".arrow-down-profile");
const DropDownContentProfile = document.querySelector(
  ".dropdown-content-profile"
);
let flag = false;

// Notifications Dropdown Menu
const notificationsBtn = document.querySelector(".notifications-drop-btn");
const arrowDownNotifications = document.querySelector(
  ".arrow-down-notifications"
);
const DropDownContentNotifications = document.querySelector(
  ".dropdown-content-notifications"
);
let flag1 = false;

// Burger Menu
const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".burger");
const main = document.querySelector("main");
let flagBurgerMenu = false;

// Initializations End---------------------------------------------------

// Profile DropDown Menu Navbar
profileBtn.addEventListener("click", () => {
  if (flag === true) {
    DropDownContentProfile.style.display = "none";
    arrowDownProfile.classList.toggle("rotate");
    flag = false;
  } else {
    DropDownContentProfile.style.display = "block";
    arrowDownProfile.classList.toggle("rotate");
    flag = true;
  }
});

// Notifications DropDown Menu Navbar
notificationsBtn.addEventListener("click", () => {
  if (flag1 === true) {
    DropDownContentNotifications.style.display = "none";
    arrowDownNotifications.classList.toggle("rotate");
    flag1 = false;
  } else {
    DropDownContentNotifications.style.display = "block";
    arrowDownNotifications.classList.toggle("rotate");
    flag1 = true;
  }
});

// Burger Menu Start
const animItem = bodymovin.loadAnimation({
  wrapper: burgerAnimation,
  animType: "svg",
  loop: false,
  autoplay: true,
  path: "https://assets5.lottiefiles.com/packages/lf20_pDIAHc.json",
});

burger.addEventListener("click", () => {
  if (flagBurgerMenu) {
    animItem.setDirection(-1);
    animItem.goToAndPlay(20, true);
    sidebar.style.left = "-14%";
    flagBurgerMenu = false;
  } else {
    //
    animItem.setDirection(1);
    animItem.goToAndPlay(0, true);
    sidebar.style.left = "0%";
    flagBurgerMenu = true;
  }
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches (auto closing sidebar)
    animItem.setDirection(1);
    animItem.goToAndPlay(0, true);
    sidebar.style.left = "0%";
    flagBurgerMenu = true;
  } else {
    animItem.setDirection(-1);
    animItem.goToAndPlay(20, true);
    sidebar.style.left = "-14%";
    flagBurgerMenu = false;
  }
}

var x = window.matchMedia("(min-width: 1271px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
// Burger Menu End

//DARK THEME
let darkMode = localStorage.getItem("darkMode");

const themeBtn = document.querySelector(".themeBtn");
themeBtn.classList.add("bi-sun");
const navbar = document.querySelector(".navbar");
const dropdownNotifications = document.querySelector(
  ".dropdown-content-notifications"
);
const dropdownProfile = document.querySelector(".dropdown-content-profile");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const body = document.querySelector("body");
const text = document.querySelectorAll("text");
const a = document.querySelectorAll("a");
const h4 = document.querySelector("h4");
const hr = document.querySelector("hr");
const tables = document.querySelectorAll(".table");
const cards = document.querySelectorAll(".card");
const cardTexts = document.querySelectorAll(".card-text");
const cardHeaders = document.querySelectorAll(".card-header");
const listGroupItems = document.querySelectorAll(".list-group-item");
flagTheme = true;

const enableDarkMode = () => {
  localStorage.setItem("darkMode", "enabled");

  navbar.style.backgroundColor = "#1F1F1F";
  sidebar.style.backgroundColor = "#1F1F1F";
  dropdownNotifications.style.backgroundColor = "#1F1F1F";
  dropdownProfile.style.backgroundColor = "#1F1F1F";
  main.style.backgroundColor = "#121212";
  body.style.backgroundColor = "#121212";
  h4.style.color = "#999999";
  hr.style.color = "#999999";
  burger.classList.add("dark-mode");
  themeBtn.classList.remove("bi-sun");
  themeBtn.classList.add("bi-moon");

  dropdownContent.forEach((e) => {
    e.style.backgroundColor = "#1f1f1f";

    e.addEventListener("mouseenter", () => {
      e.style.color = "#ffffff";
      e.style.backgroundColor = "#4c8bf5";
    });
    e.addEventListener("mouseleave", () => {
      e.style.color = "#ffffff";
      e.style.backgroundColor = "#1f1f1f";
    });
  });

  text.forEach((e) => {
    e.style.color = "#fff";
  });
  a.forEach((e) => {
    e.style.color = "#fff";
  });
  tables.forEach((e) => {
    e.style.color = "#fff";
  });
  cardTexts.forEach((e) => {
    e.style.color = "#fff";
  });
  cards.forEach((e) => {
    e.style.backgroundColor = "#1F1F1F";
  });
  listGroupItems.forEach((e) => {
    e.style.backgroundColor = "#1F1F1F";
  });
  cardHeaders.forEach((e) => {
    e.style.backgroundColor = "#4c8bf5";
  });
  flagTheme = false;
};

const disableDarkMode = () => {
  localStorage.setItem("darkMode", null);

  navbar.style.backgroundColor = "#ffffff";
  dropdownNotifications.style.backgroundColor = "#ffffff";
  dropdownProfile.style.backgroundColor = "#ffffff";
  sidebar.style.backgroundColor = "#f9f9f9";
  main.style.backgroundColor = "#eeeeee";
  body.style.backgroundColor = "#eeeeee";
  h4.style.color = "#212529";
  hr.style.color = "#212529";
  burger.classList.remove("dark-mode");
  themeBtn.classList.remove("bi-moon");
  themeBtn.classList.add("bi-sun");

  dropdownContent.forEach((e) => {
    e.style.backgroundColor = "#ffffff";

    e.addEventListener("mouseenter", () => {
      e.style.color = "#ffffff";
      e.style.backgroundColor = "#4c8bf5";
    });
    e.addEventListener("mouseleave", () => {
      e.style.color = "#000000";
      e.style.backgroundColor = "#ffffff";
    });
  });

  text.forEach((e) => {
    e.style.color = "#000";
  });
  a.forEach((e) => {
    e.style.color = "#000";
  });
  tables.forEach((e) => {
    e.style.color = "#000";
  });
  cardTexts.forEach((e) => {
    e.style.color = "#333333";
  });
  cards.forEach((e) => {
    e.style.backgroundColor = "#fff";
  });
  listGroupItems.forEach((e) => {
    e.style.backgroundColor = "#fff";
  });
  cardHeaders.forEach((e) => {
    e.style.backgroundColor = "#4c8bf5";
  });
  flagTheme = true;
};

if (darkMode === "enabled") {
  enableDarkMode();
}

themeBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (flagTheme) {
    //If white theme on
    enableDarkMode();
  } else {
    // If black theme on
    disableDarkMode();
  }
});
// Im having all the changes done inside functions, Then Im checking
// the local storage variable and then I enable or disable the darkMode
