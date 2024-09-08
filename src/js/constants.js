export class Constants {
    static get BLOCK_SIZE() {
        return 30;
    }

    // Get the information of the block types
    static get BLOCK_TYPE() {
        return {
            BREATHING_BUBBLE: {
                color: '#007bff',  // Light Blue
                name: 'Breathing Bubble',
                meaning: 'Calm and Tranquility',
                level: 1,
                pixelSize: 16,  // Suggested size for pixel art
                icon: '🫧',
                interaction: 'click',  // Action type
                soundEffect: 'calm-bubble.wav'  // Optional sound effect file
            },
            SAFE_SPACE_SHIELD: {
                color: '#28a745',  // Light Green
                name: 'Safe Space Shield',
                meaning: 'Safety and Protection',
                level: 2,
                pixelSize: 16,
                icon: '🛡️',
                interaction: 'hold',  // Could require holding down for safety
                soundEffect: 'shield-activate.wav'
            },
            AFFIRMATION_STAR: {
                color: '#ffcc00',  // Warm Yellow
                name: 'Affirmation Star',
                meaning: 'Positivity and Achievement',
                level: 3,
                pixelSize: 16,
                icon: '🌟',
                interaction: 'tap',
                soundEffect: 'star-twinkle.wav'
            },
            GROUNDING_GEM: {
                color: '#795548',  // Earthy Brown
                name: 'Grounding Gem',
                meaning: 'Stability and Focus',
                level: 4,
                pixelSize: 16,
                icon: '💎',
                interaction: 'drag',
                soundEffect: 'gem-shine.wav'
            },
            RESTRUCTURE_PUZZLE_PIECE: {
                color: '#9c27b0',  // Light Purple
                name: 'Restructure Puzzle Piece',
                meaning: 'Change and Transformation',
                level: 5,
                pixelSize: 16,
                icon: '🧩',
                interaction: 'assemble',
                soundEffect: 'puzzle-snap.wav'
            },
            EXPOSURE_KEY: {
                color: '#adb5bd',  // Light Gray
                name: 'Exposure Key',
                meaning: 'Unlocking Progress',
                level: 6,
                pixelSize: 16,
                icon: '🔑',
                interaction: 'slide',
                soundEffect: 'key-turn.wav'
            },
            RELAXATION_ORB: {
                color: '#e91e63',  // Soft Pink
                name: 'Relaxation Orb',
                meaning: 'Calmness and Relaxation',
                level: 7,
                pixelSize: 16,
                icon: '🔮',
                interaction: 'rotate',
                soundEffect: 'orb-whirl.wav'
            },
            STRESS_BALL: {
                color: '#00bcd4',  // Aqua Blue
                name: 'Stress Ball',
                meaning: 'Stress Relief',
                level: 8,
                pixelSize: 16,
                icon: '🙂',
                interaction: 'squeeze',
                soundEffect: 'ball-squeeze.wav'
            },
            SELF_CARE_POTION: {
                color: '#ff9800',  // Peach
                name: 'Self-Care Potion',
                meaning: 'Healing and Self-Care',
                level: 9,
                pixelSize: 16,
                icon: '🧪',
                interaction: 'shake',
                soundEffect: 'potion-bubble.wav'
            },
            GOAL_ACHIEVEMENT_MEDAL: {
                color: '#ffa500',  // Light Orange
                name: 'Goal Achievement Medal',
                meaning: 'Motivation and Accomplishment',
                level: 10,
                pixelSize: 16,
                icon: '🥇',
                interaction: 'collect',
                soundEffect: 'medal-ding.wav'
            },
            JOURNALING_BOOK: {
                color: '#6c757d',  // Soft Gray
                name: 'Journaling Book',
                meaning: 'Reflection and Writing',
                level: 11,
                pixelSize: 16,
                icon: '📕',
                interaction: 'flip',
                soundEffect: 'page-turn.wav'
            },
            SUPPORT_NETWORK_LINK: {
                color: '#6a1b9a',  // Light Blue-Purple
                name: 'Support Network Link',
                meaning: 'Connections and Support',
                level: 12,
                pixelSize: 16,
                icon: '🔗',
                interaction: 'connect',
                soundEffect: 'link-click.wav'
            },
            MINDFULNESS_COMPASS: {
                color: '#8bc34a',  // Sage Green
                name: 'Mindfulness Compass',
                meaning: 'Focus and Guidance',
                level: 13,
                pixelSize: 16,
                icon: '🧭',
                interaction: 'swipe',
                soundEffect: 'compass-spin.wav'
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