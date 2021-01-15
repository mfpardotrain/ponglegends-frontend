
class Command {

    constructor() {
        this.command = false;

        var el = window;
        var eventName = 'keypress';
        var lastHeld = '';
        if (el.addEventListener) {
            el.addEventListener('mouseup', (e) => this.keyListener(e, this), false);
            el.addEventListener('mousemove', (e) => this.keyListener(e, this), false);
            el.addEventListener('keyup', (e) => {
                lastHeld = '';
                this.keyListener(e, this);
            }, false);
            el.addEventListener('keydown', (e) => {
                if (e.key !== lastHeld) {
                    this.keyListener(e, this);
                    lastHeld = e.key;
                }
            }, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + eventName, this.keyListener);
        }
    }

    keyListener(event, thisCopy) {
        event = event || window.event;
        var key = event.key || event.which || event.keyCode;
        if ((key === 3 || key === 1) && event.type === "mouseup") {
            let mousePos = this.getMousePos(event);
            this.command = [key, mousePos]
        }
        if (event.type === "keyup" && (key === "q" || key === "e")) {
            this.command = [key, thisCopy.mousePos]
        }
        if (event.type === "mousemove") {
            this.mousePos = this.getMousePos(event);
        }
        let movement = {};
        if (["w", "a", "s", "d"].includes(key)) {
            if (event.type === "keydown") {
                movement[key] = 1;
            }
            if (event.type === "keyup") {
                movement[key] = 0;
            }
            this.command = [key, {x: movement[key], y: 0}]
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
