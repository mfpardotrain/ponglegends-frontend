
class UIElements {
    
    constructor() {
        this.connectButton = document.getElementsByClassName("connect-button");
        this.playerButtons = document.getElementsByClassName("player-button");
        this.resetButton = document.getElementsByClassName("reset-button");
    }

    connectButtonOnClick(legendSocket, render) {
        let keys = Object.keys(this.connectButton);
        keys.map(key => this.connectButton[key].addEventListener("click", () => {
            legendSocket.sendInfo("Connect!");
            render();
        }));
    }

    resetButtonOnClick(legendSocket) {
        let keys = Object.keys(this.resetButton);
        keys.map(key => this.resetButton[key].addEventListener("click", () => {
            legendSocket.sendInfo(legendSocket.formatMessage("Reset", {x: 0, y: 0}));
        }));
    }

    playerButtonOnClick(legendSocket) {
        let keys = Object.keys(this.playerButtons);
        console.log(this.playerButtons[0].innerHTML)
        keys.map(key => this.playerButtons[key].addEventListener("click", () => legendSocket.setFromId(this.playerButtons[key].innerHTML)));
    }
}

export default UIElements;
