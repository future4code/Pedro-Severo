const products = [
    {
        name: "Sunga",
        price: 30.00,
        tag: "summer",
        priceWithOff: 0,
    },
    {
        name: "Canga",
        price: 20.00,
        tag: "summer",
        priceWithOff: 0,
    },
    {
        name: "Moleton",
        price: 100.00,
        tag: "winter",
        priceWithOff: 0,
    },
    {
        name: "Gorro",
        price: 10.00,
        tag: "winter",
        priceWithOff: 0,
    },
    {
        name: "Cueca",
        price: 10.00,
        tag: "intim",
        priceWithOff: 0,
    },
    {
        name: "Sutia",
        price: 15.00,
        tag: "intim",
        priceWithOff: 0,
    },
];
function returnProductOff(productList) {
    productList.forEach((el) => {
        if (el.tag === "summer") {
            el.priceWithOff = el.price * 0.95;
        }
        else if (el.tag === "winter") {
            el.priceWithOff = el.price * 0.9;
        }
        else if (el.tag === "intim") {
            el.priceWithOff = el.price * 0.93;
        }
        else {
            return array;
        }
    });
    return productList;
}
console.log(returnProductOff(products));
//# sourceMappingURL=ex4.js.map