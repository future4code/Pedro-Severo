"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoo_1 = require("./zoo");
const parrot_1 = require("./parrot");
const cat_1 = require("./cat");
const simplePrinter_1 = require("./simplePrinter");
const goliZoo = new zoo_1.Zoo(new simplePrinter_1.SimplePrinter());
const louroJose = new parrot_1.Parrot("Louro José");
const garfield = new cat_1.Cat("Garfield");
louroJose.speak();
garfield.generateFurBall();
goliZoo.addBird(louroJose);
goliZoo.addMammal(garfield);
goliZoo.printAllAnimals();
const f4Zoo = new zoo_1.Zoo(new simplePrinter_1.ColourPrinter());
f4Zoo.addBird(louroJose);
f4Zoo.addMammal(garfield);
f4Zoo.printAllAnimals();
//# sourceMappingURL=index.js.map