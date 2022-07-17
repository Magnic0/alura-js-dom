const control = document.querySelectorAll('.controle-ajuste');

control.forEach((element) => {
    element.addEventListener('click', (event) => {
        changeValue(event.target.textContent, event.target.parentNode);
    })
});

function changeValue(ctrlType, control) {
    var part = control.querySelector('.controle-contador');

    if(ctrlType === '+') {
        part.value = parseInt(part.value) + 1;
    } else if(ctrlType === '-') {
        part.value = parseInt(part.value) - 1;
    }

    if(part.value < 0) {
        part.value = parseInt(part.value) + 1;
        return;
    }
}
