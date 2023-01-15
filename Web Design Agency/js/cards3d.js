var w = window.innerWidth;
var h = window.innerHeight;

const card3d = document.querySelectorAll(".card3d");
const card3dContainer = document.querySelectorAll(".card3dContainer");

// item
const tech = document.querySelectorAll(".tech");
//Animate in
for (let i = 0; i < card3dContainer.length; i++) {
  card3dContainer[i].addEventListener("mouseenter", (e) => {
    card3d[i].style.transition = "none";
    tech[i].style.transform = "translateZ(50px)";
  });
}

//Animate out
for (let i = 0; i < card3dContainer.length; i++) {
  card3dContainer[i].addEventListener("mouseleave", (e) => {
    card3d[i].style.transition = "all 0.5s ease";
    card3d[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
    tech[i].style.transform = "translateZ(0px)";
  });
}

for (let i = 0; i < card3d.length; i++) {
  card3d[i].addEventListener("mousemove", (e) => {
    cur.style.width = "60px";
    cur.style.height = "60px";
    cur.style.backgroundColor = "#ffffffa8";
  });

  card3d[i].addEventListener("mouseout", (e) => {
    cur.style = "none";
  });
}
