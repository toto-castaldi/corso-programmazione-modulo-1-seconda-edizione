let posizione = 0;
let direzione = +1;
let velocita;
let diametro;

function setup() {
    createCanvas(800, 800);
    velocita = createSlider(0, 20, 5);
    diametro = createSlider(1, width, width / 5);

    console.log(width, height);
}

function draw() {
    posizione = posizione + direzione * velocita.value();

    background(0, 0, 0);

    fill(74, 74, 26);

    ellipse(posizione, height / 2, diametro.value());

    if (posizione + diametro.value() / 2 > width) {
        direzione = -1;
    }

    if (posizione - diametro.value() / 2 < 0) {
        direzione = +1;
    }
}