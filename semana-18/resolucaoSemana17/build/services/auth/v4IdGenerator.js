"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class V4IdGenerator {
    generateId() {
        return uuid_1.v4();
    }
}
exports.V4IdGenerator = V4IdGenerator;
