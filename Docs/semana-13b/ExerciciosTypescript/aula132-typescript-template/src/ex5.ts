// a)
type dish = {
    name: string,
    cost: number, 
    price: number, 
    ingredients: string[],
};

let dishes: dish[] = [];

function createDish(dish: dish): dish[] {
    dishes = [...dishes, dish]
    return dishes; 
};

const dish1: dish = {
    name: "tropeiro",
    cost: 10.00, 
    price: 50.00, 
    ingredients: ["feijão", "farofa", "ovos", "couve", "torresmo"]
};

const dish2: dish = {
    name: "feijoada",
    cost: 15.00, 
    price: 60.00, 
    ingredients: ["feijão", "carne de porco", "couve", "laranja"]
};

createDish(dish1);
createDish(dish2);

// b)
function findDish(dishes: dish[], dishName: string): number {
    let price: number = 0;
    for (let dish of dishes) {
        if (dish.name === dishName) {
            price = dish.price
        };
    };
    
    return price;
};

const feijoada = "feijoada";

// c)

let sales: number[] = [];

function registerSell(number: number, dishPrice: number): number[] {
    const sale: number = number*dishPrice

    sales = [...sales, sale]
    return sales;
};

registerSell(3, dish2.price);
registerSell(3, dish1.price);

// d)

function soldDishes(sales: number[]): number {
    let sum: number = 0;
    for(let i = 0; i < sales.length; i++) {
        sum += sales[i]
    };

    return sum;
};

console.log(soldDishes(sales));