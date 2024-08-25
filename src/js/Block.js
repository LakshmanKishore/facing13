export class Block {
    constructor(initialState) {
        // The current state of the block
        this.state = initialState;
        // Possible states
        this.states = ['white', 'blue', 'green', 'yellow'];
    }

    // Method to advance to the next state
    nextState() {
        const currentIndex = this.states.indexOf(this.state);
        const nextIndex = (currentIndex + 1) % this.states.length;
        this.state = this.states[nextIndex];
    }

    // Method to compare this block's state with another block's state
    isEqual(otherBlock) {
        return this.state === otherBlock.state;
    }
}
