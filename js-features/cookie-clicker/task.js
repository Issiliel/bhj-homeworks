const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
let totalClicks = clicker__counter.textContent;
let clickerSpeed = +(document.getElementById("clicker__speed").textContent);
let firstClick;
let lastClick;

function changeSizes() {
    totalClicks++;
    if (totalClicks % 2 === 1) {
        cookie.width = 300;
        clicker__counter.textContent = totalClicks;
        firstClick = Date.now();
    } else {
        cookie.width = 200;
        clicker__counter.textContent = totalClicks;
        lastClick = Date.now();
        clickerSpeed = (lastClick - firstClick) / 2;
        document.getElementById("clicker__speed").textContent = clickerSpeed;
    }
}

cookie.onclick = changeSizes;