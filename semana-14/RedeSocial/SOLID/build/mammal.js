"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Mammal extends animal_1.Animal {
    run(time) {
        console.log("I'm running ");
        this.currentLocation += time * 0.6;
    }
    getCurrentLocation() {
        return this.currentLocation;
    }
}
exports.Mammal = Mammal;
//# sourceMappingURL=mammal.js.map