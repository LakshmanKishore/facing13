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
        this.blockCount = 0; // To track the number of block 13 appearances

        this.patterns = ["000111000", "010010010", "100010001", "001010100", "100111000", "001111000", "010011000", "011010000", "001011000", "010010111", "011010010", "110010010", "010010110"];

    }

    start() {
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
        const thirteenBlockAndPattern = document.createElement('div');
        thirteenBlockAndPattern.classList.add('thirteen-block-and-pattern');

        const thirteenBlock = document.createElement('div');
        thirteenBlock.classList.add('thirteen-block');
        thirteenBlock.textContent = '13';

        const pattern = document.createElement('table');

        // Get a random pattern from the patterns array
        const randomIndex = Math.floor(Math.random() * this.patterns.length);

        const patternColors = [];

        // Create 3x3 table
        for (let i = 0; i < 3; i++) {
            const row = pattern.insertRow();
            for (let j = 0; j < 3; j++) {
                const cell = row.insertCell();
                cell.classList.add('td-pattern-block');

                if (this.patterns[randomIndex][i * 3 + j] === '1') {
                    cell.style.backgroundColor = this.board.getRandomColor();
                    patternColors.push(cell.style.backgroundColor);
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

        if (this.blockCount === Constants.BLOCK_13.APPEARANCE_COUNT) {
            this.stopThirteenBlockCycle();
        }
    }

    stopThirteenBlockCycle() {
        clearInterval(this.thirteenInterval);
    }

    removeThirteenBlockAndPattern() {
        this.thirteenBlocksAndPatternsContainer.removeChild(this.thirteenBlocksAndPatternsContainer.firstChild);
        this.createdPatterns = this.createdPatterns.slice(1);

        console.log("this.createdPatterns:", this.createdPatterns);
    }

}
