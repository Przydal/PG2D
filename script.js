const startColor = [0, 245, 0];
const endColor = [0, 0, 245];
const FPS = 40;
const radius = 50;

var canvas;
var ctx;
var gradient;
var ballY = 200;
var step = 10;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    gradient = ctx.createLinearGradient(0, 500, 0, 0);
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
    ballY += step;
    if (
        ballY >= canvas.height - radius || ballY <= 0 + radius
    ) {
        step = -step;
    }
}