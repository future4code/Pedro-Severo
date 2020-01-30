"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, photo, birth, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.photo = photo;
        this.birth = birth;
        this.password = password;
    }
    ;
    getId() {
        return this.id;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    getEmail() {
        return this.email;
    }
    ;
    getPhoto() {
        return this.photo;
    }
    ;
    getBirth() {
        return this.birth;
    }
    ;
    getPassword() {
        return this.password;
    }
    ;
}
exports.User = User;
;
