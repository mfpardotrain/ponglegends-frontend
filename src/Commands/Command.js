
class Command {

    constructor() {
        this.command = false;

        var el = window;
        var eventName = 'keypress';
        if (el.addEventListener) {
            el.addEventListener('mouseup', (e) => this.keyListener(e, this), false);
            el.addEventListener('mousemove', (e) => this.keyListener(e, this), false);
            el.addEventListener('keyup', (e) => this.keyListener(e, this), false);
            el.addEventListener('keydown', (e) => this.keyListener(e, this), false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + eventName, this.keyListener);
        }
    }

    keyListener(event, thisCopy) {
        event = event || window.event;
        var key = event.key || event.which || event.keyCode;
        if (key === 3 && event.type === "mouseup") {
            let mousePos = this.getMousePos(event);
            this.command = [key, mousePos]
        }
        if (event.type === "keyup" && (key === "q" || key === "w")) {
            this.command = [key, thisCopy.mousePos]
        }
        if (event.type === "mousemove") {
            this.mousePos = this.getMousePos(event);
        }
    }

    getMousePos(event) {
        var canvas = document.getElementById('game-canvas')
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    runCommand() {
        let commandClone = [...this.command];
        this.command = false;
        return commandClone;
    }

}

export default Command;
