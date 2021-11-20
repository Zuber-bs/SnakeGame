const gridSize = 3;

// Snake
var snake;

// Thickness
var edgeThickness = 100;

// Game State
var gameState = 0; // Play

// Star of the game
var startOfTheGame = true;

// Fruit
var fruit;
var fruitPosX = [];
var fruitPosY = [];

function setup() {
    createCanvas(750, 750);

    // Edges
    leftEdge = createSprite(-edgeThickness / 2, height / 2, edgeThickness, height);
    topEdge = createSprite(width / 2, -edgeThickness / 2, width, edgeThickness);

    // Snake
    snake = createSprite(gridSize/2, gridSize/2, gridSize, gridSize);

    // Fruit
    fruit = createSprite(0, 0, gridSize, gridSize);
}

function draw() {
    background(0, 200, 0);
    noStroke();
    scale(5);

    // Grid
    push();
    for(var i = 0; i < 600; i += gridSize) {
        for(var j = 0; j < 600; j += gridSize * 2) {
            fill(0, 255, 0);
            rect(i, j, gridSize, gridSize);
        }
    }
    pop();

    push();
    for(var i = 0; i < 600; i += gridSize*2) {
        for(var j = 0; j < 600; j += gridSize) {
            fill(0, 200, 0)
            rect(i, j, gridSize, gridSize);
        }
    }
    pop();

    // Snake
    snake.shapeColor = "blue";
    snake.collide(leftEdge);
    snake.collide(topEdge);

    // Fruit
    if(startOfTheGame) {
        fruitSpawning();
    }

    drawSprites();
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        snake.velocityY = -gridSize;
        snake.velocityX = 0;
    }

    if(keyCode === DOWN_ARROW){
        snake.velocityY = gridSize;
        snake.velocityX = 0;
    }

    if(keyCode === LEFT_ARROW) {
        snake.velocityX = -gridSize;
        snake.velocityY = 0;
    }

    if(keyCode === RIGHT_ARROW) {
        snake.velocityX = gridSize;
        snake.velocityY = 0;
    }
}

function fruitSpawning() {
        var x = floor(random(1, 50));
        var y = floor(random(1, 50));
        for(var i = 0; i < 50; i++) {
            
        }
        fruit.position.x = x
        fruit.position.y = y
        console.log(fruit.x, fruit.y);
        startOfTheGame = false;
}