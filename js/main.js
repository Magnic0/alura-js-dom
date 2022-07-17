const partValue = document.querySelectorAll('.controle-contador');
const control = document.querySelectorAll('.controle-ajuste');

control.forEach((element) => {
    element.addEventListener('click', (event) => {
        changeValue(event.target.textContent);
    })
});

function changeValue(ctrlType) {
    if(ctrlType === '+') {
        partValue[0].value = parseInt(partValue[0].value) + 1;
    } else if(ctrlType === '-') {
        partValue[0].value = parseInt(partValue[0].value) - 1;
    }

    if(partValue[0].value < 0) {
        partValue[0].value = parseInt(partValue[0].value) + 1;
        return;
    }
}
