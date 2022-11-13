const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"))
tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
        tabs.forEach(tab => tab.classList.remove("tab_active"))
        tab.classList.toggle("tab_active");
        tabContent.forEach(contentTab => contentTab.classList.remove("tab__content_active"))
        tabContent[tabs.indexOf(event.target)].classList.toggle("tab__content_active")
    })
});