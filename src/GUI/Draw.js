import Ability from "./Ability.js";
import Champion from "./Champion.js";

class Draw {

    constructor() {
        this.champion = new Champion(0, "blue");
        this.champion1 = new Champion(1, "lightblue");
        this.champion2 = new Champion(2, "darkblue");
        this.champion3 = new Champion(3, "red");
        this.champion4 = new Champion(4, "pink");
        this.champion5 = new Champion(5, "darkred");
        this.champion.setXY(50, 50);
        this.champion1.setXY(50, 100);
        this.champion2.setXY(50, 150);
        this.champion3.setXY(500, 50);
        this.champion4.setXY(500, 100);
        this.champion5.setXY(500, 150);

        this.championList = [this.champion, this.champion1, this.champion2, this.champion3, this.champion4, this.champion5];
    }

    draw(data) {
        let canvas = document.getElementById('game-canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.parseData(data, ctx);
        this.championList.forEach(el => el.renderStill(ctx));

    }

    parseData(data, ctx) {
        data.forEach(el => {
            let x = el.x;
            let y = el.y;
            let affectedChampion = this.championList.find(champion => champion.fromId === el.fromId);
            let middleX = affectedChampion.xLoc + (affectedChampion.width / 2);
            let middleY = affectedChampion.yLoc + (affectedChampion.height / 2);

            if (el.name === "champion") {
                affectedChampion.render(x, y, ctx);
            }
            if (el.name === "championHealth") {
                affectedChampion.health = y;
            }
            if (el.name === "q") {
                let ability = new Ability(middleX, middleY);
                ability.renderQ(x, y, ctx);
            }
            if (el.name === "w") {
                let ability = new Ability(0, 0);
                ability.renderW(x, y, ctx);
            }
        });
    }
}

export default Draw;
