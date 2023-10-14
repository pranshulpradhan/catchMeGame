const catchMe = document.getElementById('catch-me');
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');

let score = 0;

function moveCatchMe() {
    const maxWidth = gameContainer.clientWidth - catchMe.clientWidth;
    const maxHeight = gameContainer.clientHeight - catchMe.clientHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    catchMe.style.left = `${randomX}px`;
    catchMe.style.top = `${randomY}px`;

    if (randomX < maxWidth / 2) {
        catchMe.classList.remove('right');
        catchMe.classList.add('left');
    } else {
        catchMe.classList.remove('left');
        catchMe.classList.add('right');
    }
}

catchMe.addEventListener('mouseover', () => {
    moveCatchMe();
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
});

moveCatchMe();
