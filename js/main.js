const robot = document.querySelector('.robo');

var i = 0;
robot.addEventListener('click', () => {
    i++; 
    console.log(`Tu clicou ${i} vez(es) no robô`);
})
