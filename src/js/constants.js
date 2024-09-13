export class Constants {
    static get BLOCK_SIZE() {
        return 30;
    }

    // Get the information of the block types
    static get BLOCK_TYPE() {
        return {
            Deep_Breathing: {
                color: '#6BCEFF', // Light Blue
                name: 'Deep Breathing',
                meaning: 'Helps slow down the mind and body, reducing anxiety.',
                svg: '₹<path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/>^',
                significance: 'Helps Tessa calm down and regain control when facing her fear.',
                googleFontIcon: 'air' // Google Font icon suggestion
            },
            Cognitive_Restructuring: {
                color: '#FF6B6B', // Soft Red
                name: 'Cognitive Restructuring',
                meaning: 'Challenging irrational thoughts related to fear.',
                svg: '₹<path d="M440-360h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/>^', // Cognitive restructuring icon
                significance: 'Helps Tessa challenge and reframe her fearful thoughts about the number 13.',
                googleFontIcon: 'psychology' // Google Font icon suggestion
            },
            Progressive_Muscle_Relaxation: {
                color: '#FFD93D', // Yellow
                name: 'Progressive Muscle Relaxation',
                meaning: 'Reduces physical tension in the body.',
                svg: '₹<path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>^', // Progressive relaxation icon
                significance: 'Helps Tessa relax her body, easing the tension caused by the fear of 13.',
                googleFontIcon: 'self_improvement' // Google Font icon suggestion
            },
            Mindfulness: {
                color: '#A1FF6B', // Green
                name: 'Mindfulness',
                meaning: 'Staying present in the moment to reduce anxious thoughts.',
                svg: '₹<path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l65 255H760v200H600v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 40h80v-280h-80v280Zm120-60h80v-180h-80v180Zm-240-20h80v-160h-80v160Z"/>^', // Mindfulness icon
                significance: 'Helps Tessa focus on the present and stay grounded.',
                googleFontIcon: 'spa' // Google Font icon suggestion
            },
            Exposure_Therapy: {
                color: '#FFAA6B', // Peach
                name: 'Exposure Therapy',
                meaning: 'Facing fears gradually to reduce avoidance behavior.',
                svg: '₹<path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>^', // Exposure therapy icon
                significance: 'Tessa confronts the number 13 repeatedly, becoming less afraid of it over time.',
                googleFontIcon: 'visibility' // Google Font icon suggestion
            },
            Positive_Affirmations: {
                color: '#FF6BBF', // Pink
                name: 'Positive Affirmations',
                meaning: 'Replacing negative thoughts with positive statements.',
                svg: '₹<path d="M280-120v-520l280-280 74 74-52 206h338v176L774-120H280Zm80-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406ZM80-120v-520h200v80H160v360h120v80H80Z"/>^', // Positive affirmations icon
                significance: 'Tessa repeats affirmations to build confidence in overcoming her fear.',
                googleFontIcon: 'thumb_up' // Google Font icon suggestion
            },
            Journaling: {
                color: '#6BFF94', // Mint Green
                name: 'Journaling',
                meaning: 'Writing down thoughts to process emotions.',
                svg: '₹<path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l263-262 123 122-263 263H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>^', // Journaling icon
                significance: 'Tessa writes down her fears and tracks her progress as she faces them.',
                googleFontIcon: 'edit_note' // Google Font icon suggestion
            },
            Distraction: {
                color: '#FF6BDE', // Magenta
                name: 'Distraction',
                meaning: 'Engaging in other activities to temporarily shift focus away from fear.',
                svg: '₹<path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z"/>^', // Distraction icon
                significance: 'Tessa uses distraction to take her mind off the number 13 during overwhelming moments.',
                googleFontIcon: 'controller' // Google Font icon suggestion
            },
            Support_Network: {
                color: '#6BFFC8', // Teal
                name: 'Support Network',
                meaning: 'Seeking support from friends or loved ones.',
                svg: '₹<path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/>^', // Support network icon
                significance: 'Tessa relies on support to gain strength and confront her fear of 13.',
                googleFontIcon: 'groups' // Google Font icon suggestion
            },
            Relaxation_Response: {
                color: '#6BB1FF', // Light Blue
                name: 'Relaxation Response',
                meaning: 'Triggering relaxation when stress occurs.',
                svg: '₹<path d="M479-82 163-400h113l204 204 274-275q23-23 35-54.5t12-64.5q-2-69-46-118.5T645-758q-31 0-59.5 12T536-711l-56 61-57-61q-21-23-49-36t-60-13q-54 0-93.5 34.5T167-640H85q17-85 79.5-142.5T314-840q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L479-82Zm-4-398H80v-80h555q17 0 28.5-11.5T675-600q0-17-11.5-28.5T635-640q-14 0-25 7.5T596-611l-77-21q11-39 43-63.5t73-24.5q50 0 85 35t35 85q0 50-35 85t-85 35h-47q3 10 5 19.5t2 20.5q0 50-35 85t-85 35q-41 0-73-24.5T359-408l77-21q3 14 14 21.5t25 7.5q17 0 28.5-11.5T515-440q0-17-11.5-28.5T475-480Zm6 2Z"/>^', // Relaxation response icon
                significance: 'Tessa learns to immediately calm herself in the presence of 13.',
                googleFontIcon: 'bedtime' // Google Font icon suggestion
            },
            Focused_Attention: {
                color: '#FF6B83', // Coral
                name: 'Focused Attention',
                meaning: 'Concentrating on a specific task to reduce anxious thoughts.',
                svg: '₹<path d="M120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>^', // Focused attention icon
                significance: 'Tessa focuses her attention on neutral tasks to lessen anxiety.',
                googleFontIcon: 'center_focus_strong' // Google Font icon suggestion
            },
            Emotional_Support_Animal: {
                color: '#FF6BE2', // Hot Pink
                name: 'Emotional Support Animal',
                meaning: 'Using a support animal to reduce anxiety.',
                svg: '₹<path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/>^', // Emotional support animal icon
                significance: 'Tessa finds comfort in the presence of an emotional support animal during moments of fear.',
                googleFontIcon: 'pets' // Google Font icon suggestion
            },
            Habit_Reversal: {
                color: '#6BFFB1', // Aquamarine
                name: 'Habit Reversal',
                meaning: 'Reversing negative habits that reinforce fear.',
                svg: '₹<path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"/>^', // Habit reversal icon
                significance: 'Tessa learns to break patterns that contribute to her fear of the number 13.',
                googleFontIcon: 'sync' // Google Font icon suggestion
            }
        };
    }

    static get BLOCK_13() {
        return {
            APPEARANCE_INTERVAL: 13000,
            APPEARANCE_COUNT: 13
        }
    }

    static get SVG_ICON() {
        return {
            SETTINGS: ''
        }
    }

    static getBlockTypeSVG(type) {
        return this.BLOCK_TYPE[type].svg.replace('₹', `<svg viewBox="0 -960 960 960" fill="${this.BLOCK_TYPE[type].color}">`)
        .replace('^', '</svg>');
    }

}

/*


            Gratitude: {
                color: '#94FF6B', // Fresh Green
                name: 'Gratitude',
                meaning: 'Focusing on positive aspects of life to counterbalance fear.',
                svg: '', // Gratitude icon
                significance: 'Tessa cultivates gratitude to shift her mind away from the fear of 13.',
                googleFontIcon: 'emoji_emotions' // Google Font icon suggestion
            },
            Emotional_Regulation: {
                color: '#FFB86B', // Soft Peach
                name: 'Emotional Regulation',
                meaning: 'Managing emotions in response to fear triggers.',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>', // Emotional regulation icon
                significance: 'Tessa regulates her emotions to prevent her fear from spiraling out of control.',
                googleFontIcon: 'sentiment_satisfied' // Google Font icon suggestion
            },
            Systematic_Desensitization: {
                color: '#6BFFD6', // Aqua
                name: 'Systematic Desensitization',
                meaning: 'Gradual desensitization through controlled exposure.',
                svg: '', // Systematic desensitization icon
                significance: 'Tessa faces increasingly stronger representations of her fear, becoming less afraid over time.',
                googleFontIcon: 'slow_motion_video' // Google Font icon suggestion
            },
            Visualization: {
                color: '#6B8AFF', // Indigo Blue
                name: 'Visualization',
                meaning: 'Imagining a safe place to reduce fear.',
                svg: '', // Visualization icon
                significance: 'Allows Tessa to visualize positive outcomes when confronting the number 13.',
                googleFontIcon: 'photo_camera' // Google Font icon suggestion
            },
            Self_Talk: {
                color: '#C06BFF', // Purple
                name: 'Self Talk',
                meaning: 'Using positive self-dialogue to handle fear.',
                svg: '', // Self-talk icon
                significance: 'Tessa uses constructive inner dialogue to manage her anxiety around 13.',
                googleFontIcon: 'chat_bubble' // Google Font icon suggestion
            },
            Desensitization: {
                color: '#FFCF6B', // Soft Orange
                name: 'Desensitization',
                meaning: 'Gradual exposure to anxiety-inducing stimuli to decrease the response.',
                svg: '', // Desensitization icon
                significance: 'Tessa slowly becomes less sensitive to the number 13.',
                googleFontIcon: 'hourglass_empty' // Google Font icon suggestion
            },
            Grounding_Techniques: {
                color: '#B6FF6B', // Lime Green
                name: 'Grounding Techniques',
                meaning: 'Using the five senses to stay connected to the present.',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M180-520q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17ZM120-80v-200H80v-200h200v200h-40v120h320v-200h-70q-71 0-120.5-49.5T320-530q0-53 28.5-94.5T422-686q11-65 60.5-109.5T600-840q68 0 117.5 44.5T778-686q45 20 73.5 61.5T880-530q0 71-49.5 120.5T710-360h-70v200h200v80H120Zm370-360h220q38 0 64-26t26-64q0-27-14.5-49T746-612l-42-18-6-44q-6-37-33.5-61.5T600-760q-37 0-64.5 24.5T502-674l-6 44-42 18q-25 11-39.5 33T400-530q0 38 26 64t64 26Zm110-160Z"/></svg>', // Grounding techniques icon
                significance: 'Tessa grounds herself to avoid being overwhelmed by the number 13.',
                googleFontIcon: 'nature_people' // Google Font icon suggestion
            },

*/