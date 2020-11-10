let velocita;
let diametro;
let palle;
let suono;

function preload() {
  suono = loadSound("coin.wav");
}

function setup() {
    createCanvas(800, 600);
    velocita = createSlider(0, 20, 5);
    diametro = createSlider(1, width, width / 5);

    palle = [];
}

function mouseClicked() {
    let almenoUnaPallaColpita = false;

    for (let i = 0; i < palle.length; i = i + 1) {
        let palla = palle[i];
        if (palla.colpita(mouseX, mouseY)) {
            palle.splice(i, 1);
            almenoUnaPallaColpita = true;
        }
    }

    if (almenoUnaPallaColpita == false) {
        suono.play();
        palle.push(new Palla(mouseX, mouseY));
    }

}

function draw() {
    //cancello tutto dal canvas e metto sfondo nero
    background(0, 0, 0);

    //guardo tutte le palle nell'array
    for (let i = 0; i < palle.length; i = i + 1) {
        //tiro fuori una palla dall'array
        let palla = palle[i];
        //cambiare la posizione di una palla
        palla.cambia();
        //disegnare una palla
        palla.disegna();
    }

    //disegnare il punteggio
    textSize(32);
    fill(255, 255, 255);
    text(palle.length, 10, 30);
}