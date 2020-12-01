function Shuttle() {

    this.image = loadImage('big_boss1.png');
    this.x = width / 2;

    this.update = function() {
        if (keyIsPressed === true) {
            if (keyCode === 37) {
                this.x = this.x - 10;
            } else if (keyCode === 39) {
                this.x = this.x + 10;
            }
        }
    }

    this.draw = function() {
        image(this.image, this.x, height - 100);
    }

}