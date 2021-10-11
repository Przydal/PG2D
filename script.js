const startColor = [0, 245, 0];
const endColor = [0, 0, 245];
const FPS = 60;
const radius = 50;

var canvas;
var ctx;
var ballY = 200;
var step = 10;
var currentColor = [0, 245, 0];
var colorStep = 5;
var gradient;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    gradient = ctx.createLinearGradient(0, 100, 200, 0);
    gradient.addColorStop(0, `rgb(${startColor[0]}, ${startColor[1]}, ${startColor[2]})`);
    gradient.addColorStop(1, `rgb(${endColor[0]}, ${endColor[1]}, ${endColor[2]})`);
    ctx.fillStyle = gradient;
    setInterval(() => {
        updatePositon();
        draw();
    }, 1000 / FPS);
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
        step = -step;
    }
}