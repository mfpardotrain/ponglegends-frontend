

class Champion {

    constructor(fromId, color) {
        this.fromId = fromId;
        this.height = 30;
        this.width = 30;
        this.health = 100;
        this.maxHealth = 100;
        this.color = color;
    }

    setXY(x, y) {
        this.xLoc = (x - (this.width / 2));
        this.yLoc = (y - (this.width / 2));
    }
    
    renderHealth(ctx) {
        let x = this.xLoc
        let y = this.yLoc
        let leftX = x - 5;
        let leftY = y - 5;
        let rightX = x - 5 + ((this.width + 10) * this.health / this.maxHealth);
        let rightY = y - 5;
        ctx.moveTo(leftX, leftY);
        ctx.lineTo(rightX, rightY);
        ctx.stroke();
    }

    render(x, y, ctx) {
        this.setXY(x, y);
        this.renderHealth(ctx);
        ctx.fillStyle = this.color
        ctx.fillRect(this.xLoc, this.yLoc, this.width, this.height);
    }

    renderStill(ctx) {
        this.renderHealth(ctx);
        ctx.fillStyle = this.color
        ctx.fillRect(this.xLoc, this.yLoc, this.width, this.height);
    }
}

export default Champion;
