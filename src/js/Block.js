export class Block {
    constructor(color, x, y) {
        this.color = color; // The color of the block
        this.x = x;
        this.y = y;
    }

    // Method to compare this block's color with another block's color
    isEqual(otherBlock) {
        return this.color === otherBlock.color;
    }
}
