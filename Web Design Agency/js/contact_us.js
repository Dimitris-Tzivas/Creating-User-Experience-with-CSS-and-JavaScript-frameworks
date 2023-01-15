let radioBtn = document.querySelectorAll(".radio-btn");
let radioInput = document.querySelectorAll(".radio_input");

let flag_radio = false;
let flagg = -1;

for (let i = 0; i < radioBtn.length; i++) {
  radioBtn[i].addEventListener("change", () => {
    radioBtn[i].classList.toggle("active");
    flagg = i;

    for (let j = 0; j < radioBtn.length; j++) {
      if (radioBtn[j].classList.contains("active") && j != flagg) {
        radioBtn[j].classList.remove("active");
      }
    }
    cur.style.width = "60px";
    cur.style.height = "60px";
    cur.style.backgroundColor = "#2a00d438";
    setTimeout(clickInteraction, 300);
  });
}

function clickInteraction() {
  cur.style.width = "7px";
  cur.style.height = "7px";
  cur.style.backgroundColor = "#2a00d4";
}

//Copy Button
let copyBtn = document.querySelector(".copyBtn");

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var TempText = document.createElement("input");
  TempText.value = "info@globe.co";
  document.body.appendChild(TempText);
  TempText.select();

  document.execCommand("copy");
  document.body.removeChild(TempText);
});
