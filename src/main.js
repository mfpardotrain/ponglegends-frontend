import LegendSocket from "./ServerConnection/LegendSocket.js";
import Command from "./Commands/Command.js";
import Draw from "./GUI/Draw.js";
import UIElements from "./ServerConnection/UIElements.js";

class Main {

    constructor() {
        this.fromId = 0;
        this.command = new Command;
        this.draw = new Draw;
        this.UIElements = new UIElements;
        //this.link = "ws://ec2-3-23-130-183.us-east-2.compute.amazonaws.com"
        this.link = "ws://localhost"

        //this.legendSocket = new LegendSocket("wss://172.31.40.232:8080/ws", this.fromId, this.draw);
        //this.legendSocket2 = new LegendSocket("ws://localhost:8080/socket", this.fromId, this.draw);
        //this.legendSocket = new LegendSocket("ws://localhost:8082/ws", this.fromId, this.draw);
        this.pressedKeys = this.command.pressedKeysObj;

        this.legendSocket2 = new LegendSocket(this.link + ":8080/socket", this.fromId, this.draw);
        this.UIElements.connectButtonOnClick(this.legendSocket2, () => this.render(this));

        // let startingData = [{
        //     "object": "champion",
        //     "fromId": 1,
        //     "x": 0,
        //     "y": 0,
        // },
        // {
        //     "object": "champion",
        //     "fromId": 0,
        //     "x": 50,
        //     "y": 50,
        // }
        // ];
        // this.draw.draw(startingData);
    }

    async render(thisCopy) {
        if (thisCopy.legendSocket2.connected) {
            thisCopy.legendSocket = new LegendSocket(this.link + ":8082/ws/",
                thisCopy.fromId, thisCopy.draw);
            thisCopy.UIElements.playerButtonOnClick(thisCopy.legendSocket)
            while (thisCopy.legendSocket.connected) {
                await new Promise(r => setTimeout(r, 20));
                if (thisCopy.command.command) {
                    let toRun = thisCopy.command.runCommand();
                    let formatted = thisCopy.legendSocket.formatMessage(toRun[0].toString(), toRun[1]);
                    thisCopy.legendSocket.sendInfo(formatted);
                }

            }
        }
    }

}

let main = new Main;
