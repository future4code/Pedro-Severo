"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
    ;
    getId() {
        return this.id;
    }
    ;
    getEmail() {
        return this.email;
    }
    ;
    getPassword() {
        return this.password;
    }
    ;
}
exports.User = User;
;
