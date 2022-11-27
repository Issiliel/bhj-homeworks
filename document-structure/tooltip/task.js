const hasTooltip = document.querySelectorAll('.has-tooltip');

const hintRemuve = () => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
    }
}

hasTooltip.forEach(item => item.addEventListener('click', (i) => {
    i.preventDefault();
    hintRemuve();
    const location = {left, bottom} = i.target.getBoundingClientRect();
    console.log(location);
    i.target.insertAdjacentHTML("afterEnd", 
    `<div class="tooltip tooltip_active" style="position:absolute; 
    top:${location.bottom + 5}px; 
    left:${location.left}px">
        ${i.target.title}
    </div>`);
    setTimeout(hintRemuve, 3000);
}));