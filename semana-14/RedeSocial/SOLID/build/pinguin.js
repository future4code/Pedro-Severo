"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bird_1 = require("./bird");
class Pinguin extends bird_1.Bird {
    constructor() {
        super(...arguments);
        this.currentLocation = 0;
    }
    swim(time) {
        console.log("I'm swimming");
        this.currentLocation += time * 0.5;
    }
}
exports.Pinguin = Pinguin;
//# sourceMappingURL=pinguin.js.map