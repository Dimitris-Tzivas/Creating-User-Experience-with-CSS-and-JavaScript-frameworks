//Properties carousel
new Splide(".splide", {
  type: "loop",
  perPage: 3,
  autoplay: true,
  interval: 3000,
  speed: 800,
  gap: 10,
  breakpoints: {
    990: {
      perPage: 2,
    },
    540: {
      perPage: 1,
    },
  },
}).mount();
