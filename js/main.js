const control = document.querySelectorAll('[data-type]');

control.forEach((element) => {
    element.addEventListener('click', (event) => {
        changeValue(event.target.dataset.type, event.target.parentNode);
    })
});

function changeValue(ctrlType, control) {
    var part = control.querySelector('[data-ammount]');

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
