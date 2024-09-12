import { Block } from './block';
import { Constants } from './constants';

export class Board {
    constructor(rows, columns, container, game) {
        this.rows = rows;
        this.columns = columns;
        this.container = container;
        this.blocks = []; // Store the blocks here
        this.game = game;
        this.boardColors = [];
        this.block_types = Object.keys(Constants.BLOCK_TYPE);
        this.randomBlockTypes = [];
        this.setRandomNumbers();
        this.createBoard();
    }

    setRandomNumbers() {
        console.log("this.blocktypes:", this.block_types);
        for (let i = 0; i < 25; i++) {
            if (i < 13) {
                this.randomBlockTypes.push(this.block_types[i]);
            } else {
                this.randomBlockTypes.push(this.block_types[Math.floor(Math.random() * 13)]);
            }
        }

        // Shuffle the array
        for (let i = this.randomBlockTypes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.randomBlockTypes[i], this.randomBlockTypes[j]] = [this.randomBlockTypes[j], this.randomBlockTypes[i]];
        }

        console.log("this.randomBlockTypes:", this.randomBlockTypes);
        console.log("set of random numbers:", new Set(this.randomBlockTypes));

    }

    createBoard() {
        const table = document.createElement('table');
        table.classList.add('board-table');
        this.container.appendChild(table);

        for (let i = 0; i < this.rows; i++) {
            this.blocks[i] = []; // Initialize the row in the blocks array
            for (let j = 0; j < this.columns; j++) {
                const blockName = this.randomBlockTypes[i * this.columns + j];
                const randomBlockType = Constants.BLOCK_TYPE[blockName];
                const block = new Block(blockName, randomBlockType, i, j);
                this.blocks[i][j] = block; // Store the block in the array
            }
        }

        this.drawBoard();

        table.addEventListener('touchstart', (e) => this.handleTouchStart(e, "touch"));
        table.addEventListener('touchmove', (e) => this.handleTouchMove(e, "touch"));
        table.addEventListener('touchend', (e) => this.handleTouchEnd(e, "touch"));

        table.addEventListener("mousedown", (e) => this.handleTouchStart(e, "mouse"));
        table.addEventListener("mousemove", (e) => this.handleTouchMove(e, "mouse"));
        table.addEventListener("mouseup", (e) => this.handleTouchEnd(e, "mouse"));
    }

    handleTouchStart(e, type) {
        // Reset the swipe End and Start positions only for touch events
        if (type == "touch") {
            this.swipeEnd = null;
        }

        let coordinates = type == "touch" ? e.touches[0] : e;
        // Handle the initial touch position
        this.swipeStart = { x: coordinates.clientX, y: coordinates.clientY };
        this.clickedCell = e.target.closest('td');

        // console.log("this.swipeStart:", this.swipeStart);
    }

    handleTouchMove(e, type) {
        let coordinates = type == "touch" ? e.touches[0] : e;
        // Handle the swiping action (left or right)
        this.swipeEnd = { x: coordinates.clientX, y: coordinates.clientY };

        // console.log("this.swipeEnd:", this.swipeEnd);
    }

    handleTouchEnd(e, type) {
        window.getSelection().removeAllRanges();

        const swipeDirection = this.swipeEnd && this.getSwipeDirection();
        // console.log("swipeDirection:", swipeDirection);
        if (swipeDirection) {
            if (this.clickedCell === null || swipeDirection === null) {
                return;
            }
            this.swapBlocks(this.clickedCell.x, this.clickedCell.y, swipeDirection);
            this.compareWithPattern();
        }

        // Have to check if there are any patterns occurred on the board
        console.log("blocks:", this.blocks);
        console.log("createdPatterns:", this.game.createdPatterns);
    }

    getSwipeDirection() {
        const dx = this.swipeEnd.x - this.swipeStart.x;
        const dy = this.swipeEnd.y - this.swipeStart.y;

        // console.log('dx:', dx, 'dy:', dy);

        // Calculate the absolute values of dx and dy
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        if ((absDx < 3 && absDy < 3) || (dx === 0 && dy === 0)) {
            // No swipe detected
            return null;
        }

        // Determine the swipe direction
        if (absDx > absDy) {
            // Swipe is horizontal
            if (dx > 0) {
                return 'right';
            } else if (dx < 0) {
                return 'left';
            } else {
                return null;
            }
        } else {
            // Swipe is vertical
            if (dy > 0) {
                return 'down';
            } else if (dy < 0) {
                return 'up';
            } else {
                return null;
            }
        }
    }

    swapBlocks(row, col, direction) {
        console.log("row:", row, "col:", col, "direction:", direction);
        // Determine the target column based on the swipe direction
        let targetCol = col;
        let targetRow = row;
        if (direction === 'down') {
            targetRow = row + 1;
        } else if (direction === 'up') {
            targetRow = row - 1;
        } else if (direction === 'right') {
            targetCol = col + 1;
        } else if (direction === 'left') {
            targetCol = col - 1;
        } else {
            return;
        }

        if (targetRow >= this.rows || targetRow < 0 || targetCol >= this.columns || targetCol < 0) {
            return;
        }

        // const targetCol = direction === 'right' ? col + 1 : col - 1;
        // targetCol = direction === 'down' ? row + 1 : row - 1;
        if (targetCol >= 0 && targetCol < this.columns) {
            // Swap the blocks
            const temp = this.blocks[row][col];
            this.blocks[row][col] = this.blocks[targetRow][targetCol];
            this.blocks[targetRow][targetCol] = temp;

            // Update the display
            this.drawBoard();
        }

    }

    drawBoard() {
        const table = this.container.querySelector('.board-table');
        table.innerHTML = "";
        for (let i = 0; i < this.rows; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
            for (let j = 0; j < this.columns; j++) {
                const block = this.blocks[i][j];
                const cell = document.createElement('td');
                cell.classList.add('td-block');
                cell.innerHTML = Constants.getBlockTypeSVG(block.name);
                cell.x = i;
                cell.y = j;

                row.appendChild(cell);
            }
        }
    }

    // Method to compare the current board with a given pattern
    compareWithPattern() {
        const patternToCheck = this.game.createdPatterns[0].split(',');
        console.log("blocks:", this.blocks);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const subsetBlocks = [];
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const indexX = i + x;
                        const indexY = j + y;
                        const patternColor = patternToCheck[(x + 1) * 3 + (y + 1)];

                        subsetBlocks.push(
                            indexX >= 0 && indexX < this.rows && indexY >= 0 && indexY < this.columns && patternColor
                                ? this.blocks[indexX][indexY].type.color
                                : null
                        );
                    }
                }

                if (subsetBlocks.join(',') === patternToCheck.join(",")) {
                    // alert("Pattern Found!!!");
                    this.game.removeThirteenBlockAndPattern();
                    console.log("this.game.createdPatterns:", this.game.createdPatterns);
                    if (this.game.blockCount <= Constants.BLOCK_13.APPEARANCE_COUNT) {
                        this.game.addThirteenBlockWithPattern();
                    } else {
                        console.log("Game completed, successful in removing fear of 13 from Tessa. Good job!");
                        this.game.endGame();
                    }
                    return;
                }
            }
        }
    }
}
