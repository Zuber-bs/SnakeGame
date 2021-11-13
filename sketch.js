const gridSize = 3;

// Snake
var snake;

function setup() {
    createCanvas(800, 800);

    // Snake
    snake = createSprite(gridSize/2, gridSize/2, gridSize, gridSize);

    // Edges
    edge1 = createSprite()
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
    snake.collide(edges[0]);
    snake.collide(edges[1]);
    snake.collide(edges[2]);
    snake.collide(edges[3]);

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