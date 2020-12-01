function Palla(pX, pY) {
    
    this.posizioneX = pX;
    this.direzioneX = +1;

    this.posizioneY = pY;
    this.direzioneY = +1;

    this.red = random(255);
    this.green = random(255);
    this.blu = random(255);

    this.cambia = function () {
        this.posizioneX = this.posizioneX + this.direzioneX * velocita.value();
        this.posizioneY = this.posizioneY + this.direzioneY * velocita.value();

        if (this.posizioneX + diametro.value() / 2 > width) {
            this.direzioneX = -1;
        }

        if (this.posizioneX - diametro.value() / 2 < 0) {
            this.direzioneX = +1;
        }

        if (this.posizioneY + diametro.value() / 2 > height) {
            this.direzioneY = -1;
        }

        if (this.posizioneY - diametro.value() / 2 < 0) {
            this.direzioneY = +1;
        }
    }

    this.disegna = function () {
        fill(this.red, this.green, this.blu, 200);
        ellipse(this.posizioneX, this.posizioneY, diametro.value());
    }

    this.colpita = function (x, y) {
        if (
            x > this.posizioneX - diametro.value() / 2 && 
            x < this.posizioneX + diametro.value() / 2 &&
            y > this.posizioneY - diametro.value() / 2 &&
            y < this.posizioneY + diametro.value() / 2) {
                return true;
            }
    }
}