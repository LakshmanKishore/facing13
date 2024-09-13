import { Level } from './level';
import { Board } from './board';
import { Constants } from './constants';
import { Block } from './block';

export class Game {
    constructor(level, container) {
        this.level = new Level(level);
        this.container = container;
        this.settings = this.level.getSettings();
        this.createdPatterns = [];
        this.board = new Board(this.settings.rows, this.settings.columns, this.container, this);

        this.modalElement = document.querySelector('.modal');
        this.thirteenBlocksAndPatternsContainer = document.querySelector('.thirteen-blocks-and-patterns-container');
        this.fearMeter = document.querySelector('.fear-meter');

        this.patterns = ["000111000", "010010010", "100010001", "001010100", "100111000", "001111000", "010011000", "011010000", "001011000", "010010111", "011010010", "110010010", "010010110"];

        this.handleMobileDevice();
        this.fillBlocksInformation();

        window.onresize = this.handleMobileDevice.bind(this);
    }

    start() {
        this.blockCount = 0; // To track the number of block 13 appearances


        console.log('Starting game with level:', this.level.difficulty);
        // For the first time only add thirteen blocks
        this.addThirteenBlockWithPattern();
        // And then start the cycle
        this.startThirteenBlockCycle();
    }

    startThirteenBlockCycle() {
        this.thirteenInterval = setInterval(() => {
            this.addThirteenBlockWithPattern();
        }, Constants.BLOCK_13.APPEARANCE_INTERVAL);
    }

    addThirteenBlockWithPattern() {
        if (this.blockCount >= Constants.BLOCK_13.APPEARANCE_COUNT) {
            this.stopThirteenBlockCycle();
            if (this.createdPatterns.length === 0) {
                this.endGame();
            }
            return;
        }

        const thirteenBlockAndPattern = document.createElement('div');
        thirteenBlockAndPattern.classList.add('thirteen-block-and-pattern');

        const thirteenBlock = document.createElement('div');
        thirteenBlock.classList.add('thirteen-block');
        thirteenBlock.textContent = '13';

        const pattern = document.createElement('table');

        // Get a random pattern from the patterns array
        const randomIndex = Math.floor(Math.random() * this.patterns.length);

        const patternColors = [];

        const randomBlockTypes = [];
        for (let i = 0; i < this.board.randomBlockTypes.length; i++) {
            randomBlockTypes.push(this.board.randomBlockTypes[i]);
        }

        // Create 3x3 table
        for (let i = 0; i < 3; i++) {
            const row = pattern.insertRow();
            for (let j = 0; j < 3; j++) {
                const cell = row.insertCell();
                cell.classList.add('td-pattern-block');

                if (this.patterns[randomIndex][i * 3 + j] === '1') {
                    // Get a random number from the randomBlockTypes array
                    const randomIndex = Math.floor(Math.random() * randomBlockTypes.length);
                    const randomBlockTypeName = randomBlockTypes[randomIndex];
                    let randomBlockType = Constants.BLOCK_TYPE[randomBlockTypeName];
                    // Remove the random block type from the array
                    randomBlockTypes.splice(randomIndex, 1);

                    const block = new Block(randomBlockTypeName, randomBlockType, i, j);
                    cell.innerHTML = Constants.getBlockTypeSVG(block.name);
                    patternColors.push(randomBlockType.color);
                } else {
                    patternColors.push(null);
                }
            }
        }
        pattern.classList.add('pattern');

        thirteenBlockAndPattern.appendChild(thirteenBlock);
        thirteenBlockAndPattern.appendChild(pattern);

        // Move block from left to right
        this.thirteenBlocksAndPatternsContainer.appendChild(thirteenBlockAndPattern);

        // Add the pattern colors to the createdPatterns array
        this.createdPatterns.push(patternColors.join(","));

        // Increment block count
        this.blockCount++;

        this.increaseFearMeter(10);

        //Check if the fear meter is full
        if (parseInt(this.fearMeter.value) >= 100) {
            this.gameOver();
        }
    }

    stopThirteenBlockCycle() {
        clearInterval(this.thirteenInterval);
    }

    removeThirteenBlockAndPattern() {
        this.thirteenBlocksAndPatternsContainer.removeChild(this.thirteenBlocksAndPatternsContainer.firstChild);
        this.createdPatterns = this.createdPatterns.slice(1);
        this.decreaseFearMeter(10);
    }

    increaseFearMeter(incrementValue) {
        this.fearMeter.value = parseInt(this.fearMeter.value) + incrementValue;
    }

    decreaseFearMeter(decrementValue) {
        this.fearMeter.value = parseInt(this.fearMeter.value) - decrementValue;
    }

    gameOver() {
        this.container.hidden = true;

        this.stopThirteenBlockCycle();

        this.openModal(document.querySelector(".fail"));
    }

    endGame() {

        // Hide the game container
        this.container.hidden = true;

        // Stop the 13th block cycle
        this.stopThirteenBlockCycle();

        // Show the game over modal
        this.openModal(document.querySelector(".finish"));

    }

    openModal(modalContentElement) {
        this.modalElement.style.display = 'block';

        // Set up the restart button

        const modalContentText = this.modalElement.querySelector('.modal-content-text');
        modalContentText.innerHTML = modalContentElement.innerHTML;

        const restartGame = this.modalElement.querySelector('#restart-game');
        const closeButton = this.modalElement.querySelector('.close');

        console.log("restartGame", restartGame);

        if (restartGame !== null) {
            closeButton.hidden = true;
            restartGame.onclick = () => {
                this.modalElement.style.display = 'none';
                this.container.hidden = false;
                this.fearMeter.value = 0;

                console.log("Restarting the game...");
                // Optionally, add logic to restart the game
                this.start();
            };
            return;
        }

        // Close button logic
        closeButton.onclick = () => {
            this.modalElement.style.display = 'none';
            this.container.hidden = false;
        };

        // Click outside the modal to close it
        window.onclick = (event) => {
            if (event.target == this.modalElement) {
                this.modalElement.style.display = 'none';
                this.container.hidden = false;
            }
        };
    }

    handleMobileDevice() {
        const informationIconElement = document.querySelector(".iicon");
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const gameDescription = document.querySelector(".game-description");

        if (isMobile) {
            // Enable the i icon to display the information of each block.
            informationIconElement.hidden = false;
            gameDescription.hidden = true;

            // Add event listener to the i icon
            informationIconElement.addEventListener("click", () => {
                this.openModal(gameDescription);

                // Get all the blocks information li element
                const blockInformationUl = document.querySelector(".modal-content").querySelector("ul");
                this.addBlockInformationSnackBar(blockInformationUl);
            });
        } else {
            // Disable the i icon
            informationIconElement.hidden = true;
            gameDescription.hidden = false;
        }
    }

    fillBlocksInformation() {
        const blocksInformation = document.querySelector(".blocks-information");

        const blockNames = Object.keys(Constants.BLOCK_TYPE);
        const blockInformationUl = document.createElement("ul");
        blockInformationUl.style.listStyleType = "none";

        for (let i = 0; i < blockNames.length; i++) {
            const blockName = blockNames[i];
            const blockType = Constants.BLOCK_TYPE[blockName];
            const blockInformation = document.createElement("li");
            blockInformation.setAttribute("blockName", blockName);
            blockInformation.innerHTML = Constants.getBlockTypeSVG(blockName).replace("<svg", "<svg height='2rem' width='2rem'");

            const blockInformationText = document.createTextNode(" -- " + blockType.meaning);

            blockInformation.style.display = "flex";
            blockInformation.style.alignItems = "center";
            blockInformation.style.justifyContent = "left";

            blockInformation.appendChild(blockInformationText);
            blockInformationUl.appendChild(blockInformation);
        }
        blocksInformation.appendChild(blockInformationUl);
        this.addBlockInformationSnackBar(blockInformationUl);
    }

    addBlockInformationSnackBar(blockInformationUl) {
        const blockInformationLis = blockInformationUl.querySelectorAll("li");

        for (let i = 0; i < blockInformationLis.length; i++) {
            const blockInformation = blockInformationLis[i];
            const blockType = Constants.BLOCK_TYPE[blockInformation.getAttribute("blockName")];
            blockInformation.onclick = () => {
                console.log("snack bar should be popped up");
                const snackbar = document.createElement("div");
                snackbar.className = "snackbar";
                snackbar.style.position = "absolute";
                snackbar.style.top = `${blockInformation.offsetTop - 20}px`;
                snackbar.style.left = `${blockInformation.offsetLeft}px`;
                snackbar.style.borderRadius = "5px";
                snackbar.style.zIndex = "9999";
                snackbar.style.border = "1px dotted black";
                snackbar.style.backgroundColor = "white";
                snackbar.style.padding = "2px 2px";
                snackbar.innerHTML = blockType.name + "---" + blockType.significance;
                document.body.appendChild(snackbar);
                setTimeout(() => {
                    snackbar.remove();
                }, 3000);
            };
        }
    }

}