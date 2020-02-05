import { Zoo } from "./zoo";
import { Parrot } from "./parrot";
import { Cat } from "./cat";
import { SimplePrinter, ColourPrinter } from "./simplePrinter";

const goliZoo = new Zoo(new SimplePrinter());

const louroJose = new Parrot("Louro José");
const garfield = new Cat("Garfield");

louroJose.speak();
garfield.generateFurBall();

goliZoo.addBird(louroJose);
goliZoo.addMammal(garfield);

goliZoo.printAllAnimals();

const f4Zoo = new Zoo(new ColourPrinter());

f4Zoo.addBird(louroJose);
f4Zoo.addMammal(garfield);

f4Zoo.printAllAnimals();
