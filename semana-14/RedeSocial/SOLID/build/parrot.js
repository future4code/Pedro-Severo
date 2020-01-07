"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bird_1 = require("./bird");
class Parrot extends bird_1.Bird {
    constructor() {
        super(...arguments);
        this.currentAltitude = 0;
    }
    speak() {
        console.log("ANA MARIA");
    }
    fly(time) {
        console.log("I'm flying");
        this.currentAltitude += time * 0.5;
    }
}
exports.Parrot = Parrot;
//# sourceMappingURL=parrot.js.map