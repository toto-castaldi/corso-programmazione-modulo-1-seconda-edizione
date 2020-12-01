let shuttle;

function setup() {
    
    createCanvas(800, 600);

    shuttle = new Shuttle();
}

function draw() {
    background(0);

    shuttle.update();
    shuttle.draw();

}