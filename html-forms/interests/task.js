document.querySelectorAll(".interest__check").forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const parent = checkbox.closest('li'),
            kids = parent.querySelectorAll('ul.interests_active input.interest__check');

        kids.forEach((kid) => {
            kid.checked = checkbox.checked;
        })
    });
})