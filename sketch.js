const gridSize = 3;

// Snake
var snake;

// Thickness
var edgeThickness = 100;

function setup() {
    createCanvas(1500, 800);

    // Edges
    leftEdge = createSprite(-edgeThickness / 2, height / 2, edgeThickness, height);
    rightEdge = createSprite(800-edgeThickness, height / 2, edgeThickness, height);
    topEdge = createSprite(width / 2, -edgeThickness / 2, width, edgeThickness);
    bottomEdge = createSprite(width / 2, height + (edgeThickness / 2), width, edgeThickness);

    // Snake
    snake = createSprite(gridSize/2, gridSize/2, gridSize, gridSize);
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
    snake.collide(rightEdge);
    snake.collide(topEdge);
    snake.collide(bottomEdge);

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