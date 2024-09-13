import { Game } from './game';
// Get DOM elements
const startGameButton = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const menu = document.getElementById('menu');

// Add event listener to the start game button
startGameButton.addEventListener('click', handleStartGameButtonClick);

function handleStartGameButtonClick() {
    const info = document.querySelector("#info");

    gameContainer.hidden = false;

    // Initialize and start the game
    const game = new Game(gameContainer);
    game.openModal(info);
}

handleStartGameButtonClick();