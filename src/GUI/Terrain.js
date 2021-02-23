
class Terrain {

    constructor(color, height, width, x, y) {
        this.height = height;
        this.width = width;
        this.color = color;
        // this.xLoc = (x - (this.width / 2));
        // this.yLoc = (y - (this.width / 2));
        this.xLoc = x;
        this.yLoc = y;
    }

    setXY(x, y) {
        this.xLoc = (x - (this.width / 2));
        this.yLoc = (y - (this.width / 2));
    }
    
    render(x, y, ctx) {
        this.setXY(x, y);
        ctx.fillStyle = this.color
        ctx.fillRect(this.xLoc, this.yLoc, this.width, this.height);
    }

    renderStill(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.xLoc, this.yLoc, this.width, this.height);
    }
}

export default Terrain;
