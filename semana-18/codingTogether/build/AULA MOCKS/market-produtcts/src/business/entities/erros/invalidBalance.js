"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = require("./customError");
class InvalidBalanceError extends customError_1.CustomError {
    constructor(message = "User balance is invalid") {
        super(message, 405);
    }
}
exports.InvalidBalanceError = InvalidBalanceError;
