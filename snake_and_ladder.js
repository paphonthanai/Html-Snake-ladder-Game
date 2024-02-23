const boardElement = document.getElementById("board");
let evenRow = true; // 1 for left to right, -1 for right to left
let currentRow = 1;
let columnNumber = 11;
const gameBoard = [];
let boardCreate = false;



function createBoard() {
    const startText = "Start";
    const endText = "End";
    
    for (let i = 0; i < 10; i++) {
        let currentRow = document.createElement("br");
        boardElement.appendChild(currentRow);
    
        const row = [];
        for (let j = 0; j < columnNumber; j++) {
            let div = document.createElement("div");
            let value = (i % 2 === 0) ? (columnNumber * i) + j : (columnNumber * (i + 1)) - (j + 1);
            
            if (value === 0) {
                div.textContent = startText;
                div.classList.add("start");
            } else if (value === 100) {
                div.textContent = endText;
                div.classList.add("end");
            } else if (value < 100) {
                div.textContent = value;
            } else if (value > 100) {
                div.textContent = value;
                div.classList.add("hidden")
                div.style.zIndex = "-1"
            }
    
            if (value != 10) {
                div.classList.add("box");
            } 
            
            if (value == 10 || value == 32 || value == 54 || value == 76 || value == 98 ) {
                div.classList.add("top-right");
            }
            if (value == 11 || value == 33 || value == 55 || value == 77 || value == 99) {
                div.classList.add("bottom-right");
            }
    
            if (value == 21 || value == 43 || value == 65 || value == 87) {
                div.classList.add("top-left");
            }
    
            if (value == 22 || value == 44 || value == 66 || value == 88) {
                div.classList.add("bottom-left");
            }
        
            boardElement.appendChild(div);
            row.push(value);
        }
        gameBoard.push(row);        
    }
    console.log(gameBoard);

    const startBotton = document.getElementById("start-button");
    startBotton.classList.add("hidden");
    startBotton.style.border = "none";
    startBotton.style.background = "transparent";
    startBotton.style.position = "absolute";
    startBotton.style.top = 0;
    startBotton.style.zIndex = -1;

    const roleBotton = document.getElementById("roll-button");
    // roleBotton.classList.add("hidden");
    // roleBotton.style.border = "none";
    // roleBotton.style.background = "transparent";
    // roleBotton.style.zIndex = -1;
}

let playerCount = 0;

function createPlayer() {
    if (playerCount < 3) {
        const player = document.createElement("div");
        player.classList.add("player_container");

        player.id = `p${playerCount + 1}`;
        player.textContent = `P ${playerCount + 1}`;

        if (playerCount == 0) {
            player.style.left = "-15px";
            player.style.top = "-15px";
        }
        if (playerCount == 1) {
            player.style.left = "5px";
            player.style.top = "-15px";
        }
        if (playerCount == 2) {
            player.style.left = "-7px";
            player.style.top = "-5px";
        }  
        
        const selectPlayer = player;
        const playerHead = document.createElement("div");
        const playerShowder = document.createElement("div");
        const playerBody = document.createElement("div");
        const playerBase = document.createElement("div");
        
        playerHead.classList.add("head");
        playerShowder.classList.add('showder');
        playerBody.classList.add('body');
        playerBase.classList.add('base');
        
        selectPlayer.appendChild(playerHead);
        selectPlayer.appendChild(playerShowder);  
        selectPlayer.appendChild(playerBody);
        selectPlayer.appendChild(playerBase);
     
        
        // สุ่มสี
        const randomColor = getRandomColor();
        player.style.backgroundColor = "transpareant";
        playerHead.style.backgroundColor = randomColor;
        playerShowder.style.backgroundColor = randomColor;
        playerBody.style.backgroundColor = randomColor; 
        playerBase.style.backgroundColor = randomColor; 
        player.style.color = "#fff";
        // ตำแหน่งเริ่มต้นที่ 0
        const startPosition = document.querySelector(".start");
        startPosition.appendChild(player);

        playerCount++;

        if (playerCount === 3) {
            const startButton = document.getElementById("start-button");
            startButton.style.display = "none";
        }
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color != "#42d113") {
        return color;
    }
}



