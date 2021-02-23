
class LegendSocket {

    constructor(url, fromId, draw) {
        this.url = url;
        this.fromId = fromId;
        this.connected = false;
        this.getSocket(url);
        this.draw = draw;
    }

    setFromId(fromId) {
        console.log(fromId);
        this.fromId = fromId;
    }

    async sendInfo(pressedKeys) {
        this.socket.send(JSON.stringify(pressedKeys));
    }

    formatMessage(key, coordinate) {
        return {
            "fromId": this.fromId,
            "key": key,
            "coordinate": coordinate,
        }
    }

    getSocket(url) {
        this.socket = new WebSocket(url);
        // refactor this figure out why it doesn't connect = true on open
        this.connected = true;
        this.socket.onopen = (event) => this.onOpen(event, this);
        this.socket.onmessage = (event) => this.onMessage(event, this);
        this.socket.onerror = this.onError;
        this.socket.onclose = this.onClose;
    }

    onOpen(event, thisCopy) {
        thisCopy.connected = true;
        console.log("connected!");
    }

    onMessage(event, thisCopy) {
        let data = JSON.parse(event.data);
        thisCopy.draw.draw(data);
    }

    onError(event) {
        if (event.data === undefined) {
            return null;
        } else {
            let data = JSON.parse(event.data);
            this.error = data;
        }
    }

    onClose() {
        this.connected = false;
        console.log("connection closed.")
    }

    render() {
        let body = document.getElementById("container");
        let socketContainer = document.createElement('div');
        socketContainer.className = "websocket";
        body.appendChild(socketContainer);
    };

}

export default LegendSocket;
