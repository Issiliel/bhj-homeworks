const reveal = Array.from(document.querySelectorAll(".reveal"));

function visible (item) {
    const {top, bottom} = item.getBoundingClientRect(item);
    if (top > window.innerHeight) {
        return false;
    }
    if (bottom < 0) {
        return false
    }
    return true
}

window.addEventListener("scroll", () => {
    reveal.forEach(reveal => {
        reveal.classList.remove("reveal_active")
        const isVisible = visible(reveal);
        if (isVisible) {
            reveal.classList.add("reveal_active")
        } else {
            reveal.classList.remove("reveal_active")
        }
    })
});