import { Game } from './game';
// Get DOM elements
const startGameButton = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const menu = document.getElementById('menu');

// Add event listener to the start game button
startGameButton.addEventListener('click', handleStartGameButtonClick);

function handleStartGameButtonClick() {
    // Get the selected level
    const selectedLevel = document.querySelector('input[name="level"]:checked').value;

    // Hide the menu and show the game container
    menu.hidden = true;
    gameContainer.hidden = false;

    // Initialize and start the game
    const game = new Game(selectedLevel, gameContainer);
    game.start();
}

handleStartGameButtonClick();