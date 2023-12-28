const slider = document.querySelector("#slider");
const next = document.querySelector("#btnNext");
const prev = document.querySelector("#btnPrev");
const imgCollection = slider.children;
let i = 0;

function plus() {
  imgCollection[i].classList.toggle("hidden");
  if (i == imgCollection.length - 1) {
    i = 0;
  } else {
    i = i + 1;
  }
  imgCollection[i].classList.toggle("hidden");
}

function minus() {
  imgCollection[i].classList.toggle("hidden");
  if (i == 0) {
    i = imgCollection.length - 1;
  } else {
    i = i - 1;
  }
  imgCollection[i].classList.toggle("hidden");
}

slider.addEventListener("click", plus);
next.addEventListener("click", plus);
prev.addEventListener("click", minus);
