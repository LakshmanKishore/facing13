// Get the radio buttons and the start game button
const easyRadio = document.getElementById('easy');
const mediumRadio = document.getElementById('medium');
const hardRadio = document.getElementById('hard');
const startGameButton = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const menu = document.getElementById('menu');

// Add event listener to the start game button
startGameButton.addEventListener('click', function() {
    // Get the selected level
    let selectedLevel = '';
    if (easyRadio.checked) {
        selectedLevel = 'easy';
    } else if (mediumRadio.checked) {
        selectedLevel = 'medium';
    } else if (hardRadio.checked) {
        selectedLevel = 'hard';
    } else {
        alert("Please select a level.");
        return;
    }

    // Show the game container
    gameContainer.hidden = false;
    menu.hidden = true;

    // Start the game with the selected level
    startGame(selectedLevel);
});

// Function to start the game with the selected level
function startGame(level) {
    // Do something here to start the game with the selected level
    console.log('Starting game with level:', level);
}