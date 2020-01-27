"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InsufficientBalance extends Error {
    constructor(message = "Saldo insuficiente", code = 410) {
        super(message);
        this.code = code;
    }
}
exports.InsufficientBalance = InsufficientBalance;
