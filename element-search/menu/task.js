const menuLink = Array.from(document.querySelectorAll(".menu__link"));
const menu = Array.from(document.querySelectorAll(".menu"));

menuLink.forEach((element) => {
    element.addEventListener("click", (event) => {
        if (element.parentElement.querySelector(".menu")) {
            event.preventDefault();
            if (element.parentElement.querySelector(".menu").className.includes("menu_active")) {
                element.parentElement.querySelector(".menu").classList.remove("menu_active");
            } else {
                menu.forEach((menu) => menu.classList.remove("menu_active"));
                element.parentElement.querySelector(".menu").classList.add("menu_active");
            }
        }
    });
});