let velocita;
let diametro;
let palla0;
let palla1;

function setup() {
    createCanvas(800, 600);
    velocita = createSlider(0, 20, 5);
    diametro = createSlider(1, width, width / 5);

    palla0 = new Palla(100,30);
    palla1 = new Palla(300,150);
}

function mouseClicked() {
    if (mouseX > width /2) {
        palla0 = new Palla(mouseX, mouseY);
    } else {
        palla1 = new Palla(mouseX, mouseY);
    }
}

function draw() {
    background(0, 0, 0);
    
    palla0.cambia();
    palla0.disegna();

    palla1.cambia();
    palla1.disegna();
}