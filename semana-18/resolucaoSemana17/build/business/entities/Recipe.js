"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recipe {
    constructor(title, description, userId, creationDate = new Date()) {
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.creationDate = creationDate;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getCreationDate() {
        return this.creationDate;
    }
    getUserId() {
        return this.userId;
    }
}
exports.Recipe = Recipe;
