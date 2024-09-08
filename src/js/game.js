import { Level } from './level';
import { Board } from './board';
import { Constants } from './constants';

export class Game {
    constructor(level, container) {
        this.level = new Level(level);
        this.container = container;
        this.settings = this.level.getSettings();
        this.createdPatterns = [];
        this.board = new Board(this.settings.rows, this.settings.columns, this.container, this);

        this.thirteenBlocksAndPatternsContainer = document.querySelector('.thirteen-blocks-and-patterns-container');
        this.fearMeter = document.querySelector('.fear-meter');

        this.patterns = ["000111000", "010010010", "100010001", "001010100", "100111000", "001111000", "010011000", "011010000", "001011000", "010010111", "011010010", "110010010", "010010110"];

    }

    start() {
        this.blockCount = 0; // To track the number of block 13 appearances


        console.log('Starting game with level:', this.level.difficulty);
        // For the first time only add thirteen blocks
        this.addThirteenBlockWithPattern();
        // And then start the cycle
        this.startThirteenBlockCycle();
    }

    startThirteenBlockCycle() {
        this.thirteenInterval = setInterval(() => {
            this.addThirteenBlockWithPattern();
        }, Constants.BLOCK_13.APPEARANCE_INTERVAL);
    }

    addThirteenBlockWithPattern() {
        if (this.blockCount >= Constants.BLOCK_13.APPEARANCE_COUNT) {
            this.stopThirteenBlockCycle();
            if (this.createdPatterns.length === 0) {
                this.endGame();
            }
            return;
        }

        const thirteenBlockAndPattern = document.createElement('div');
        thirteenBlockAndPattern.classList.add('thirteen-block-and-pattern');

        const thirteenBlock = document.createElement('div');
        thirteenBlock.classList.add('thirteen-block');
        thirteenBlock.textContent = '13';

        const pattern = document.createElement('table');

        // Get a random pattern from the patterns array
        const randomIndex = Math.floor(Math.random() * this.patterns.length);

        const patternColors = [];

        const randomBlockTypes = [];
        for (let i = 0; i < this.board.randomBlockTypes.length; i++) {
            randomBlockTypes.push(this.board.randomBlockTypes[i]);
        }

        // Create 3x3 table
        for (let i = 0; i < 3; i++) {
            const row = pattern.insertRow();
            for (let j = 0; j < 3; j++) {
                const cell = row.insertCell();
                cell.classList.add('td-pattern-block');

                if (this.patterns[randomIndex][i * 3 + j] === '1') {
                    // Get a random number from the randomBlockTypes array
                    const randomIndex = Math.floor(Math.random() * randomBlockTypes.length);
                    let randomBlockType = Constants.BLOCK_TYPE[randomBlockTypes[randomIndex]];
                    // Remove the random block type from the array
                    randomBlockTypes.splice(randomIndex, 1);

                    cell.style.backgroundColor = randomBlockType.color;
                    cell.innerHTML = randomBlockType.icon;
                    patternColors.push(randomBlockType.color);
                } else {
                    patternColors.push(null);
                }
            }
        }
        pattern.classList.add('pattern');

        thirteenBlockAndPattern.appendChild(thirteenBlock);
        thirteenBlockAndPattern.appendChild(pattern);

        // Move block from left to right
        this.thirteenBlocksAndPatternsContainer.appendChild(thirteenBlockAndPattern);

        // Add the pattern colors to the createdPatterns array
        this.createdPatterns.push(patternColors.join(","));

        // Increment block count
        this.blockCount++;

        this.increaseFearMeter(10);

        //Check if the fear meter is full
        if (parseInt(this.fearMeter.value) >= 1000) {
            this.gameOver();
        }
    }

    stopThirteenBlockCycle() {
        clearInterval(this.thirteenInterval);
    }

    removeThirteenBlockAndPattern() {
        this.thirteenBlocksAndPatternsContainer.removeChild(this.thirteenBlocksAndPatternsContainer.firstChild);
        this.createdPatterns = this.createdPatterns.slice(1);
        this.decreaseFearMeter(10);
    }

    increaseFearMeter(incrementValue) {
        this.fearMeter.value = parseInt(this.fearMeter.value) + incrementValue;
    }

    decreaseFearMeter(decrementValue) {
        this.fearMeter.value = parseInt(this.fearMeter.value) - decrementValue;
    }

    gameOver() {
        console.log('Game over!');
        alert("Game Over!");
    }

    endGame() {
        // Show a modal saying that the game is over and you have won the game
        const gameOverModal = document.getElementById('game-over-modal');
        gameOverModal.style.display = 'block';

        // Hide the game container
        this.container.hidden = true;

        // Stop the 13th block cycle
        this.stopThirteenBlockCycle();

        // Set up the close button and restart button
        const closeButton = gameOverModal.querySelector('.close');
        const restartButton = gameOverModal.querySelector('#restart-game');

        // Close button logic
        closeButton.onclick = () => {
            gameOverModal.style.display = 'none';
            this.container.hidden = false;
        };

        // Restart game button logic
        restartButton.onclick = () => {
            gameOverModal.style.display = 'none';
            this.container.hidden = false;
            // Optionally, add logic to restart the game
            this.start();
        };

        // Click outside the modal to close it
        window.onclick = (event) => {
            if (event.target == gameOverModal) {
                gameOverModal.style.display = 'none';
                this.container.hidden = false;
            }
        };
    }


}
