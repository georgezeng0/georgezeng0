//Variables
const canvasWidth = 600;
const canvasHeight = 400;

let playerWidth = 30;
let playerHeight = 30;
let playerY = 200
let playerX = 20;

let fallSpeed = 0; // Do not change
let fallAccel = 0.1 // Rate of accel
let jumpSpeed = 20;
let jumpDecel = 2;

let blocks = [];

const updateInterval = 25; //milliseconds

//Create canvas
class Canvas {
    constructor(height, width) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
    }
}

//Player
class Player {
    constructor(width, height, x, y) {
        this.yPos = 200;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.jumpSpeed = jumpSpeed;
        this.jumping = false;
        this.alive = true;
    }
    drawPlayer() {
        let context = gameCanvas.context;
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

//Block
class Block {
    constructor() {
        this.height = Math.floor(20 + Math.random() * 200);
        this.width = Math.floor(10 + Math.random() * 50);
        this.speed = 1 + Math.random() * 5;
        this.x = canvasWidth - playerWidth;
        this.y = canvasHeight - this.height;
    }
    drawBlock() {
        let context = gameCanvas.context;
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}

//Score
class Score {
    constructor() {
        this.score = 0;
    }
    drawScore() {
        let context = gameCanvas.context;
        context.font = "30px Marker Felt"
        context.fillStyle = "black";
        context.fillText(`Score: ${this.score}`, 20, 30)
    }
}

//Initialise objects
let player = new Player(playerWidth, playerHeight, playerX, playerY);
let score = new Score();
const gameCanvas = new Canvas(canvasHeight, canvasWidth);
let context = gameCanvas.context;
context.font = "25px Marker Felt";
context.fillStyle = "black";
context.fillText(`Press Any Key To Start`, 180, 100);
context.fillText(`<space> to JUMP`, 200, 200);
let heading = document.getElementById('title');
heading.insertAdjacentElement('afterend', gameCanvas.canvas)

//Functions
const startGame = function () {
    body.removeEventListener('keydown', startGame);
    initCanvas();
    setInterval(updateCanvas, updateInterval);
}

const updateCanvas = function () {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    if (player.alive) {
        movePlayer();
        player.drawPlayer();

        initBlocks();
        move_Draw_Blocks(); //ALso has detect collection
    } else {
        context.font = "25px Marker Felt";
        context.fillStyle = "black";
        context.fillText("You Lose! Press R to restart", 150, canvasHeight / 2)
    }
    score.drawScore();

}

const initCanvas = function () {
    //Add button controls
    body.addEventListener('keydown', (e) => {
        if (e.code === "Space") {
            if (!player.jumping) player.jumping = true;
            else jumpReset();
        }
        if (e.code === "KeyR") {
            player.alive = true;
            resetPlayer()
            blocks = [];
            score.score = 0;
        }
    })
}

let initBlocks = function () {
    if (Math.random() > 0.99) {
        let block = new Block()
        blocks.push(block)
    }
}

let move_Draw_Blocks = function () {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].x -= blocks[i].speed;
        if (blocks[i].x <= 0 - blocks[i].width) {
            blocks.splice(i, 1);
            score.score += 1;
            continue
        }
        blocks[i].drawBlock();
        detectCollision(blocks[i]);
    }
}

const movePlayer = function () {
    player.y += fallSpeed;
    fallSpeed += fallAccel;

    if (player.jumping) jump();

    if (player.y >= (canvasHeight - playerHeight)) {
        player.y = canvasHeight - playerHeight;
        fallSpeed = 0;
    }
    if (player.y <= (0)) {
        player.y = 0;
        player.jumping = false;
    }
}

const jump = function () {
    player.y -= player.jumpSpeed;
    player.jumpSpeed -= jumpDecel
    if (player.jumpSpeed <= 0) {
        player.jumping = false
        player.jumpSpeed = jumpSpeed;
    }

}

const jumpReset = function () {
    player.jumpSpeed = jumpSpeed;
}

const detectCollision = function (block) {
    playerLeft = player.x;
    playerRight = player.x + player.width;
    playerTop = player.y;
    playerBottom = player.y - player.height;

    blockLeft = block.x;
    blockRight = block.x + block.width;
    blockTop = block.y;
    blockBottom = block.y - block.height;

    if ((playerRight >= blockLeft && playerBottom >= blockTop) ||
        (blockLeft <= 0 && playerLeft <= blockRight && playerBottom >= blockTop)) {
        player.alive = false;
    }
}

const resetPlayer = function () {
    player = new Player(playerWidth, playerHeight, playerX, playerY);
    player.drawPlayer();
}

//DOM objects
let body = document.querySelector("body");
body.addEventListener('keydown', startGame);








