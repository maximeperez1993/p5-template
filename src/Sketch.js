export default class Sketch {

    constructor() {

    }

    preload() {
    }

    setup() {
        sk.createCanvas(window.innerWidth, window.innerHeight);
        sk.background(0);
    }

    draw() {
        sk.rect(sk.mouseX, sk.mouseY, 10, 10);
    }

    mousePressed() {
    }
}