export class Constants {
    static get BLOCK_SIZE() {
        return 30;
    }

    // Get the information of the block types
    static get BLOCK_TYPE() {
        return {
            BREATHING_BUBBLE: {
                color: '#007bff',
                name: 'Breathing Bubble',
                meaning: 'Tranquility'
            },
            SAFE_SPACE_SHIELD: {
                color: '#28a745',
                name: 'Safe Space Shield',
                meaning: 'Safety'
            },
            WALL: {
                color: '#6c757d',
                name: 'Wall',
                meaning: 'Barrier'
            }
        };
    }

    static get BLOCK_13() {
        return {
            APPEARANCE_INTERVAL: 13000,
            APPEARANCE_COUNT: 13
        }
    }

}