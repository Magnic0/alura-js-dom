const control = document.querySelectorAll('[data-type]');
const stats = document.querySelectorAll('[data-stats]');
const parts = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

control.forEach((element) => {
    element.addEventListener('click', (event) => {
        changeValue(event.target.dataset.type, event.target.parentNode);
    });
});

function changeValue(ctrlType, control) {
    var part = control.querySelector('[data-ammount]');

    if(ctrlType === '+') {
        part.value = parseInt(part.value) + 1;
    } else if(ctrlType === '-') {
        part.value = parseInt(part.value) - 1;
    };

    if(part.value < 0) {
        part.value = 0;
        return;
    };

    updateStats(part.dataset);
};

function updateStats(part) {
    stats.forEach(element => {
        element.textContent = parseInt(element.textContent) + parts[part.ammount][element.dataset.stats];
    });
}
