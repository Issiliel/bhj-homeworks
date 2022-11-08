const sliderItem = document.querySelectorAll(".slider__item");
const sliderDot = document.querySelectorAll(".slider__dot");
const sliderNext = document.querySelector(".slider__arrow_next");
const sliderPrev = document.querySelector(".slider__arrow_prev");
const totalЕlements = sliderItem.length;

let index = 0;

function render() {
    sliderItem.forEach((element) => element.classList.remove("slider__item_active"));
    sliderDot.forEach((element) => element.classList.remove("slider__dot_active"));
    sliderItem[index].classList.add("slider__item_active");
    sliderDot[index].classList.add("slider__dot_active");
}

sliderNext.addEventListener("click", () => {
    index < totalЕlements - 1 ? index++ : index = 0;
    render();
})

sliderPrev.addEventListener("click", () => {
    index > 0 ? index-- : index = totalЕlements - 1;
    render();
})

sliderDot.forEach((element) => {
    element.addEventListener("click", (event) => {
        index = sliderDot.indexOf(event.target);
        render();
    })
})