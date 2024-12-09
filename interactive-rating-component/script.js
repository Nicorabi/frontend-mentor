const mainContainerEl = document.querySelector("#main-container");
const secondContainerEl = document.querySelector("#second-container");
const btnEl = document.querySelector("#btn");
const ratingsEl = document.querySelector("#rating");
const numbersEl = document.querySelectorAll(".numbers");
let submit = null;

btnEl.addEventListener("click", () => {
  if (submit === null) {
    alert("Please choose a number!");
  } else {
    mainContainerEl.style.display = "none";
    secondContainerEl.classList.remove("hidden");
  }
});

numbersEl.forEach((number) => {
  number.addEventListener("click", () => {
    ratingsEl.textContent = number.textContent;
    submit = true;
  })
})
