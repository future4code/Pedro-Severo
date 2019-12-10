let dishes = [];
function createDish(dish) {
    dishes = [...dishes, dish];
    return dishes;
}
;
const dish1 = {
    name: "tropeiro",
    cost: 10.00,
    price: 50.00,
    ingredients: ["feijão", "farofa", "ovos", "couve", "torresmo"]
};
const dish2 = {
    name: "feijoada",
    cost: 15.00,
    price: 60.00,
    ingredients: ["feijão", "carne de porco", "couve", "laranja"]
};
createDish(dish1);
createDish(dish2);
function findDish(dishes, dishName) {
    let price = 0;
    for (let dish of dishes) {
        if (dish.name === dishName) {
            price = dish.price;
        }
        ;
    }
    ;
    return price;
}
;
const feijoada = "feijoada";
let sales = [];
function registerSell(number, dishPrice) {
    const sale = number * dishPrice;
    sales = [...sales, sale];
    return sales;
}
;
registerSell(3, dish2.price);
registerSell(3, dish1.price);
function soldDishes(sales) {
    let sum = 0;
    for (let i = 0; i < sales.length; i++) {
        sum += sales[i];
    }
    ;
    return sum;
}
;
console.log(soldDishes(sales));
//# sourceMappingURL=ex5.js.map