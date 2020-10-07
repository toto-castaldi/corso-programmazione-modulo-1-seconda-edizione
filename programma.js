//console.log("ciao mondo !!!!");
//console.log(3 + 5);
//console.log(45 * 12 + 30);
//console.log("io mi chiamo Toto e ho " + 44 + " anni");
//console.log(3.2 + 0.5);
//console.log(12.5 * 2);

function setup() {
    console.log("ciao sono la funzione setup");
    createCanvas(800, 800);

}

let x = 0;

function draw() {
    //Red Green Blue RGB
    background(0, 0, 0);

    //colore rosso per la linea
    stroke(200, 0, 0);
    //linea
    line(200, 600, 400, 400);

    x = x + 1;

    //non riempire
    noFill();

    //ellisse
    stroke(0, 255, 0);
    ellipse(300, 300, 150, 80);
}