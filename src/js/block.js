export class Block {
    constructor(name, type, x, y) {
        this.name = name;
        this.type = type;
        this.x = x;
        this.y = y;
    }

    // Method to compare this block's color with another block's color
    isEqual(otherBlock) {
        return this.type.color === otherBlock.type.color;
    }
}
