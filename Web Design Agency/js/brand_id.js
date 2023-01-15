//Bubbles
let bubble = document.querySelectorAll(".bubble");
let counter = 0;
let bubbles = 0;
let sum = 0;

for (let i = 0; i < bubble.length; i++) {
  bubble[i].addEventListener("mousemove", (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    bubble[i].style.transform = `translate3d(${
      (e.offsetX - width / 2) / 8
    }px, ${(e.offsetY - height / 2) / 8}px, 0px)`;
    cur.style.backgroundColor = "#ffffff";
  });

  bubble[i].addEventListener("mouseout", (e) => {
    bubble[i].style.transform = "none";
    cur.style = "none";
  });

  bubble[i].addEventListener("click", (e) => {
    e.preventDefault();
    if (bubble[i].classList.contains("selected")) {
      bubbles--;
      toggleSelect(bubble[i]);
      removeBrandAttribute(bubble[i].innerText);
    } else if (bubbles < 5) {
      toggleSelect(bubble[i]);
      setBrandAttribute(bubble[i].innerHTML);
      bubbles++;
    } else if (bubbles === 5 && bubble[i].classList.contains("selected")) {
      bubbles--;
      toggleSelect(bubble[i]);
    }
  });
}

function toggleSelect(x) {
  cur.style.width = "60px";
  cur.style.height = "60px";
  cur.style.backgroundColor = "#ffffffa8";

  setTimeout(clickInteraction, 300);
  x.classList.toggle("selected");
}

//Brand attributes
//Create an attribute
let attributesHolder = document.querySelector(".brand_attributes");
function setBrandAttribute(attribute) {
  let attributeTitle = document.createElement("div");
  attributeTitle.setAttribute("class", "attribute");
  attributeTitle.innerHTML = attribute;
  attributeTitle.classList.add("fade-in");
  attributesHolder.appendChild(attributeTitle);
}

//Remove an attribute
function removeBrandAttribute(attributeToBeRemoved) {
  let attributes = document.querySelectorAll(".attribute");

  for (i = 0; i < attributes.length; i++) {
    if (attributes[i].innerText === attributeToBeRemoved) {
      attributes[i].classList.remove("fade-in");
      attributes[i].classList.add("fade-out");
      x = attributes[i];
      setTimeout(removeAfterFade, 500, x);

      function removeAfterFade(x) {
        x.remove();
      }
    }
  }
}
