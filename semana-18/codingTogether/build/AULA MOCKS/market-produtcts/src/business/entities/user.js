"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
exports.User = User;
