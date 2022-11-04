const holes = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = function () {
        if (holes[i].className.includes('hole_has-mole')) {
            dead.textContent++;

            if (dead.textContent == 10) {
                alert('Победа!');

                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert('Вы проиграли!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    };
}