const FontSize = document.querySelectorAll('.font-size');
const controlBtns = document.querySelectorAll('div');
const contentBox = document.querySelector('.book__content');

for (let styleBtn of controlBtns) {
    styleBtn.addEventListener('click', function(event){
        event.preventDefault();
        let keyStyles = event.target.dataset;
        for (let value in keyStyles) {
            if (value === 'size') {   
                let activeFontSize = document.querySelector('.font-size_active');
                activeFontSize.classList.remove('font-size_active');
                event.target.classList.add('font-size_active'); 
                switch (keyStyles[value]) {
                    case "big":
                        if (contentBox.classList.contains(`font-size_small`)) {
                            contentBox.classList.remove('font-size_small');
                        }
                        contentBox.classList.add('font-size_big');
                    break;
                    case "small":
                        if (contentBox.classList.contains(`font-size_big`)) {
                            contentBox.classList.remove('font-size_big');
                        }
                        contentBox.classList.add('font-size_small');
                    break;
                    case "original":
                        if (contentBox.classList.contains(`font-size_small`)) {
                            contentBox.classList.remove('font-size_small');
                        }
                        if (contentBox.classList.contains(`font-size_big`)) {
                            contentBox.classList.remove('font-size_big');
                        }
                    break;
                }
                FontSize[1].dataset.size = 'original';
            }   
        }
    });
}