const
    fs = require("fs"),
    { createCanvas } = require("canvas");

const WIDTH = 100;
const HEIGHT = 50;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#222222";
ctx.fillRect(0, 0, WIDTH, HEIGHT);
ctx.fillStyle = "#f2f2f2";
ctx.font = "32px Arial";
ctx.fillText("Hello", 13, 35);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("test.png", buffer);