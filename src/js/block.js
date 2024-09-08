export class Block {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }

    // Method to compare this block's color with another block's color
    isEqual(otherBlock) {
        return this.type.color === otherBlock.type.color;
    }
}
