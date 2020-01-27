"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bird_1 = require("./bird");
const mammal_1 = require("./mammal");
class SimplePrinter {
    printAnimal(animal) {
        let message = "";
        if (animal instanceof bird_1.Bird) {
            message += "Ave - ";
        }
        else if (animal instanceof mammal_1.Mammal) {
            message += "Mamífero - ";
        }
        message += animal.getName().toUpperCase();
        console.log(message);
    }
}
exports.SimplePrinter = SimplePrinter;
class ColourPrinter {
    printAnimal(animal) {
        let message = "";
        if (animal instanceof bird_1.Bird) {
            message += "Ave - ";
        }
        else if (animal instanceof mammal_1.Mammal) {
            message += "Mamífero - ";
        }
        message += animal.getName();
        console.log("\x1b[36m%s", message, "\x1b[0m");
    }
}
exports.ColourPrinter = ColourPrinter;
//# sourceMappingURL=simplePrinter.js.map