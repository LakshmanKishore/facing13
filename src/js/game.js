import { Level } from './level';
import { Board } from './board';

export class Game {
    constructor(level, container) {
        this.level = new Level(level);
        this.container = container;
        this.settings = this.level.getSettings();
        this.board = new Board(this.settings.rows, this.settings.columns, this.container);
    }

    start() {
        console.log('Starting game with level:', this.level.difficulty);
    }


}
