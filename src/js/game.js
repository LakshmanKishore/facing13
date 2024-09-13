import { Board } from './board';
import { Constants } from './constants';
import { Block } from './block';

export class Game {
    constructor(container) {
        this.container = container;
        this.createdPatterns = [];
        this.board = new Board(5, 5, this.container, this);

        this.modalElement = document.querySelector('.modal');
        this.thirteenBlocksAndPatternsContainer = document.querySelector('.thirteen-blocks-and-patterns-container');
        this.fearMeter = document.querySelector('.fear-meter');
        this.moves = document.querySelector(".moves");
        this.rem = document.querySelector(".rem");

        this.onoff = document.querySelector("#on-off");

        this.dl = document.querySelector("#dl");
        this.savedTheme = localStorage.getItem("facing-13-theme");

        this.patterns = ["000111000", "010010010", "100010001", "001010100", "100111000", "001111000", "010011000", "011010000", "001011000", "010010111", "011010010", "110010010", "010010110"];

        this.zzfxV = 0.3;
        this.zzfx = this.getzzfx();

        this.handleMobileDevice();
        this.fillBlocksInformation();
        this.handleAudio();
        this.handleTheme();
        this.addFavicon();

        window.onresize = this.handleMobileDevice.bind(this);
    }

    start() {
        this.blockCount = 0; // To track the number of block 13 appearances

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

        thirteenBlock.innerHTML = Constants.BLOCK_13.SVG_13;

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
        // Increment fear meter every 13 seconds
        this.fearMeterInterval = setInterval(() => {
            this.increaseFearMeter(5);
            if (this.fearMeter.value >= 100) {
                this.gameOver();
            }
        }, 13000);
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

        document.querySelector("#final-moves-count").innerText = this.moves.innerText;

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
        const startGame = this.modalElement.querySelector("#start-game");

        if (startGame !== null) {
            closeButton.hidden = true;
            startGame.onclick = () => {
                this.modalElement.style.display = 'none';

                // Start the game
                this.start();
            };
            return;
        }


        console.log("restartGame", restartGame);

        if (restartGame !== null) {
            closeButton.hidden = true;
            restartGame.onclick = () => {
                this.modalElement.style.display = 'none';
                // Reload the page
                window.location.reload();
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
                snackbar.classList.add("snackbar");
                snackbar.style.top = `${blockInformation.offsetTop - 20}px`;
                snackbar.style.left = `${blockInformation.offsetLeft}px`;
                snackbar.innerHTML = blockType.name + "---" + blockType.significance;
                document.body.appendChild(snackbar);
                setTimeout(() => {
                    snackbar.remove();
                }, 3000);
            };
        }
    }

    addFavicon() {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/svg+xml';
        link.href = URL.createObjectURL(new Blob([Constants.BLOCK_13.SVG_13], { type: 'image/svg+xml' }));
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    handleAudio() {
        console.log("this.onoff", this.onoff);
        let svgs = this.onoff.querySelectorAll("svg");
        let currentAudio = localStorage.getItem("facing-13-audio");
        this.updateAudio(svgs, currentAudio === null ? true : currentAudio === "true" ? true : false);
        this.onoff.addEventListener("click", () => this.updateAudio(svgs, localStorage.getItem("facing-13-audio") === "true" ? false : true));
    }

    updateAudio(svgs, audio) {
        console.log("updating audio to ", audio);
        if (audio) {
            svgs[0].style.display = "inline";
            svgs[1].style.display = "none";
            this.audio = true;
            localStorage.setItem("facing-13-audio", true);
            this.zzfxV = 1;
        } else {
            svgs[0].style.display = "none";
            svgs[1].style.display = "inline";
            this.audio = false;
            localStorage.setItem("facing-13-audio", false);
            this.zzfxV = 0;
        }

    }

    handleTheme() {
        let svgs = this.dl.querySelectorAll("svg");
        let currentTheme = localStorage.getItem("facing-13-theme");
        this.updateTheme(svgs, currentTheme);
        this.dl.addEventListener("click", () => this.updateTheme(svgs, localStorage.getItem("facing-13-theme") === "light" ? "dark" : "light"));

    }

    updateTheme(svgs, theme) {
        console.log("updating theme to ", theme);
        if (theme === "light") {
            document.documentElement.setAttribute('data-theme', 'light');
            svgs[0].style.display = "none";
            svgs[1].style.display = "inline";
            this.savedTheme = "light";
            localStorage.setItem("facing-13-theme", "light");
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            svgs[0].style.display = "inline";
            svgs[1].style.display = "none";
            this.savedTheme = "dark";
            localStorage.setItem("facing-13-theme", "dark");
        }
    }

    getzzfx() {
        let // ZzFXMicro - Zuper Zmall Zound Zynth - v1.3.1 by Frank Force ~ 1000 bytes
            zzfxX = new AudioContext, // audio context
            zzfx =                   // play sound
                (p = 1, k = .05, b = 220, e = 0, r = 0, t = .1, q = 0, D = 1, u = 0, y = 0, v = 0, z = 0, l = 0, E = 0, A = 0, F = 0, c = 0, w = 1, m = 0, B = 0
                    , N = 0) => {
                        let M = Math, d = 2 * M.PI, R = 44100, G = u *= 500 * d / R / R, C = b *= (1 - k + 2 * k * M.random(k = [])) * d / R,
                        g = 0, H = 0, a = 0, n = 1, I = 0, J = 0, f = 0, h = N < 0 ? -1 : 1, x = d * h * N * 2 / R, L = M.cos(x), Z = M.sin, K = Z(x) / 4, O = 1 + K,
                        X = -2 * L / O, Y = (1 - K) / O, P = (1 + h * L) / 2 / O, Q = -(h + L) / O, S = P, T = 0, U = 0, V = 0, W = 0; e = R * e + 9; m *= R; r *= R; t *=
                            R; c *= R; y *= 500 * d / R ** 3; A *= d / R; v *= d / R; z *= R; l = R * l | 0; p *= this.zzfxV; for (h = e + m + r + t + c | 0; a < h; k[a++]
                                = f * p)++J % (100 * F | 0) || (f = q ? 1 < q ? 2 < q ? 3 < q ? Z(g ** 3) : M.max(M.min(M.tan(g), 1), -1) : 1 - (2 * g / d % 2 + 2
                                ) % 2 : 1 - 4 * M.abs(M.round(g / d) - g / d) : Z(g), f = (l ? 1 - B + B * Z(d * a / l) : 1) * (f < 0 ? -1 : 1) * M.abs(f) ** D * (a
                                    < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - w) : a < e + m + r ? w : a < h - c ? (h - a - c) / t * w : 0), f = c ? f / 2 + (c > a ? 0 : (a < h - c ? 1 : (
                                        h - a) / c) * k[a - c | 0] / 2 / p) : f, N ? f = W = S * T + Q * (T = U) + P * (U = f) - Y * V - X * (V = W) : 0), x = (b += u += y) * M.cos(A *
                                            H++), g += x + x * E * Z(a ** 5), n && ++n > z && (b += v, C += v, n = 0), !l || ++I % l || (b = C, u = G, n = n || 1); p = zzfxX.
                                                createBuffer(1, h, R); p.getChannelData(0).set(k); b = zzfxX.createBufferSource();
                    b.buffer = p; b.connect(zzfxX.destination); b.start()
                }

        return zzfx
    }

}