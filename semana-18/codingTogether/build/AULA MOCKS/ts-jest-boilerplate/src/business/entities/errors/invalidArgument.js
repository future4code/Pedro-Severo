"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidArgumentError extends Error {
    constructor(message = "Argumento Inválido", code = 405) {
        super(message);
        this.code = code;
    }
}
exports.InvalidArgumentError = InvalidArgumentError;
