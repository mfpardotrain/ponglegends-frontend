
class Ability {

    constructor(startingX, startingY) {
        this.startingX = startingX;
        this.startingY = startingY;
    }

    renderQ(x, y, ctx) {
        ctx.moveTo(this.startingX, this.startingY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    renderW(x, y, ctx) { 
        let xMiddle = (x - (10 / 2));
        let yMiddle = (y - (10 / 2));
        ctx.fillRect(xMiddle, yMiddle, 10, 10);
    }

}

export default Ability;
