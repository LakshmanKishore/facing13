export class Level {
    constructor(difficulty) {
        this.difficulty = difficulty;
    }

    // Set up difficulty-specific settings
    getSettings() {
        switch (this.difficulty) {
            case 'easy':
                return { rows: 5, columns: 5, interval: 13000 };
            case 'medium':
                return { rows: 5, columns: 5, interval: 10000 };
            case 'hard':
                return { rows: 5, columns: 5, interval: 7000 };
            default:
                return { rows: 5, columns: 5, interval: 13000 };
        }
    }
}
