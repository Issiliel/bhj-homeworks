const timer = document.getElementById("timer");
const timerId = function() {
    if (timer.textContent != 0) {
        timer.textContent --;
    } else {
        clearInterval(timerId)
        alert ('Вы победили в конкурсе!')
    }
}

setInterval(timerId, 1000)



