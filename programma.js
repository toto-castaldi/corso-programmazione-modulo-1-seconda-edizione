let velocita;
let diametro;
let palla0;
let palla1;

function Palla() {
    this.posizione = random(width);
    this.direzione = +1;
    this.red = random(255);
    this.green = random(255);
    this.blu = random(255);

    this.cambia = function () {
        this.posizione = this.posizione + this.direzione * velocita.value();

        if (this.posizione + diametro.value() / 2 > width) {
            this.direzione = -1;
        }

        if (this.posizione - diametro.value() / 2 < 0) {
            this.direzione = +1;
        }
    }

    this.disegna = function () {
        fill(this.red, this.green, this.blu, 200);
        ellipse(this.posizione, height / 2, diametro.value());
    }
}

function setup() {
    createCanvas(800, 800);
    velocita = createSlider(0, 20, 5);
    diametro = createSlider(1, width, width / 5);

    console.log(width, height);

    palla0 = new Palla();
    palla1 = new Palla();
}

function draw() {
    background(0, 0, 0);
    
    palla0.cambia();
    palla0.disegna();

    palla1.cambia();
    palla1.disegna();
}