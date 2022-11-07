const modalClose = document.querySelectorAll('.modal__close');
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add("modal_active");

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function () {
        modalMain.className = 'modal';
        modalSuccess.className = 'modal';
    }
}

showSuccess.onclick = function () {
    modalSuccess.className = 'modal modal_active';
    modalMain.className = 'modal';
}

