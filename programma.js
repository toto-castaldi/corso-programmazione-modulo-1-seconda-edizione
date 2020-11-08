let velocita;
let diametro;
let palle;

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
        if (palla.stataColpita == false) {
            palla.colpita(mouseX, mouseY);
            if (palla.stataColpita) {
                almenoUnaPallaColpita = true;
            }
        }
    }

    if (almenoUnaPallaColpita == false) {
        palle.push(new Palla(mouseX, mouseY));
    }

}

function draw() {
    background(0, 0, 0);

    for (let i = 0; i < palle.length; i = i + 1) {
        let palla = palle[i];
        if (palla.stataColpita == false) {
            palla.cambia();
            palla.disegna();
        }
    }
}