"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class Purchase {
    constructor(id, userId, products) {
        this.id = id;
        this.userId = userId;
        this.products = products;
    }
}
exports.Purchase = Purchase;
class PurchaseProduct extends product_1.Product {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }
}
exports.PurchaseProduct = PurchaseProduct;
