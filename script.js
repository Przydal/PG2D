const startColor = "#008000";
const endColor = "#3498db";
const FPS = 60;
const radius = 50;

var canvas;
var ctx;
var ballY = 200;
var step = 10;


window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = startColor;
    setInterval(() => {
        updatePositon();
        draw();
    }, 1000 / FPS);
    setInterval(updateColor, 1000);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(200, ballY, 50, 0, 2 * Math.PI);
    ctx.fill();
}

function updatePositon() {
    ballY = ballY + step;
    if (ballY >= canvas.height - radius) {
        step = -step;
    }
    if (ballY <= 0 + radius) {
        step = -step;;
    }
}

function updateColor() {
    ctx.fillStyle = ctx.fillStyle === startColor ? endColor : startColor;
}