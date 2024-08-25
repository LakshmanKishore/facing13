import { Block } from './block';

export class Board {
    constructor(rows, columns, container) {
        this.rows = rows;
        this.columns = columns;
        this.container = container;
        this.blocks = []; // Store the blocks here
    }

    drawBoard() {
        const table = document.createElement('table');
        this.container.appendChild(table);

        for (let i = 0; i < this.rows; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
            this.blocks[i] = []; // Initialize the row in the blocks array

            for (let j = 0; j < this.columns; j++) {
                const cell = document.createElement('td');
                const block = new Block('white'); // Start with the initial state 'white'
                this.blocks[i][j] = block; // Store the block in the array

                cell.style.backgroundColor = block.state;
                cell.style.border = '1px solid black';
                row.appendChild(cell);

                // Add event listener for clicking cells
                cell.addEventListener('click', () => {
                    block.nextState(); // Change the block's state
                    cell.style.backgroundColor = block.state; // Update the cell's color
                });
            }
        }
    }

    // Method to compare the current board with a given block's state
    compareWithBlock13(block13) {
        // Example: Check if any block in the grid matches block13's state
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.blocks[i][j].isEqual(block13)) {
                    return true; // At least one block matches
                }
            }
        }
        return false; // No blocks match
    }
}
