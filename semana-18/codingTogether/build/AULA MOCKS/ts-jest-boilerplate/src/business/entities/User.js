"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
exports.User = User;
