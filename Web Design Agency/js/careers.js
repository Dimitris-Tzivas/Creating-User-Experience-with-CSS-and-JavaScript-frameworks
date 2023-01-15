var accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    for (let j = 0; j < accordion.length; j++) {
      if (j != i && accordion[j].classList.contains("active")) {
        accordion[j].classList.toggle("active");
        let panell = accordion[j].nextElementSibling;
        panell.style.maxHeight = null;
        console.log(accordion[j]);
      }
    }

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
