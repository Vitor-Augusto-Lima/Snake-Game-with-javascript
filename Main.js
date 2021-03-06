let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x:8*box,
    y:8*box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1)*box,
    y: Math.floor(Math.random() * 15 + 1)*box
}

function criarBG() {
    context.fillStyle = "#31A719";
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarSnake() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box)

    }
}

function drawfood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', upadate)

function upadate(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left"
    if(event.keyCode == 38 && direction != "down") direction = "up"
    if(event.keyCode == 39 && direction != "left") direction = "right"
    if(event.keyCode == 40 && direction != "up") direction = "down"
}


function iniciarjogo() {
if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
if(snake[0].x < 0 && direction == "left") snake[0].x = 16*box;
if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
if(snake[0].y < 0 && direction == "up") snake[0].y = 16*box;

for(c=1; c<snake.length; c++) {
    if(snake[0].x == snake[c].x && snake[0].y == snake[c].y){
        clearInterval(jogo);
        alert("Game Over");
    }
}

criarBG();
criarSnake();
drawfood()

let snakex = snake[0].x;
let snakey = snake[0].y;

if(direction == "right") snakex += box;
if(direction == "left") snakex -= box;
if(direction == "up") snakey -= box;
if(direction == "down") snakey += box;

if(snakex != food.x || snakey != food.y) {
    snake.pop();
} else {
    food.x = Math.floor(Math.random() * 15 + 1)*box;
    food.y = Math.floor(Math.random() * 15 + 1)*box;
}



let newhead = {
    x: snakex,
    y: snakey
}

snake.unshift(newhead);

}

let jogo = setInterval(iniciarjogo, 100)