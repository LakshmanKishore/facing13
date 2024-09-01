import { Block } from './block';

export class Board {
    constructor(rows, columns, container) {
        this.rows = rows;
        this.columns = columns;
        this.container = container;
        this.blocks = []; // Store the blocks here
        this.createBoard();
    }

    createBoard() {
        const table = document.createElement('table');
        this.container.appendChild(table);

        for (let i = 0; i < this.rows; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
            this.blocks[i] = []; // Initialize the row in the blocks array

            for (let j = 0; j < this.columns; j++) {
                const color = this.getRandomColor();
                const block = new Block(color, i, j);
                this.blocks[i][j] = block; // Store the block in the array

                const cell = document.createElement('td');
                cell.style.backgroundColor = block.color;
                cell.style.border = '1px solid black';

                cell.x = i;
                cell.y = j;

                row.appendChild(cell);
            }
        }

        table.addEventListener('touchstart', (e) => this.handleTouchStart(e, "touch"));
        table.addEventListener('touchmove', (e) => this.handleTouchMove(e, "touch"));
        table.addEventListener('touchend', (e) => this.handleTouchEnd(e, "touch"));

        table.addEventListener("mousedown", (e) => this.handleTouchStart(e, "mouse"));
        table.addEventListener("mousemove", (e) => this.handleTouchMove(e, "mouse"));
        table.addEventListener("mouseup", (e) => this.handleTouchEnd(e, "mouse"));

    }

    getRandomColor() {
        const colors = ['green', 'yellow', 'blue', 'red', 'orange', 'purple', 'pink', 'brown', 'cyan', 'magenta'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    handleTouchStart(e, type) {
        // Reset the swipe End and Start positions only for touch events
        if (type == "touch") {
            this.swipeEnd = null;
        }

        let coordinates = type == "touch" ? e.touches[0] : e;
        // Handle the initial touch position
        this.swipeStart = { x: coordinates.clientX, y: coordinates.clientY };
        this.clickedCell = e.target;

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
            this.swapBlocks(this.clickedCell.x, this.clickedCell.y, swipeDirection);
        }
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
            this.updateBoard();
        }
    }

    updateBoard() {
        const table = this.container.querySelector('table');
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const cell = table.rows[i].cells[j];
                cell.style.backgroundColor = this.blocks[i][j].color;
            }
        }
    }

    // Method to compare the current board with a given pattern
    compareWithPattern(pattern) {
        // Check for the pattern in the board and return true if found
        // Pattern matching logic goes here
    }
}
