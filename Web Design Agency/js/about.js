const laptop_animation = document.getElementById("laptop_animation");

const animItemLaptop = bodymovin.loadAnimation({
  wrapper: laptop_animation,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets2.lottiefiles.com/packages/lf20_3jezq8s4.json",
});
