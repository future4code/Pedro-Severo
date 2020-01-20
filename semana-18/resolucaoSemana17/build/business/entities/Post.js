"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, userId, text, user) {
        this.id = id;
        this.userId = userId;
        this.text = text;
        this.user = user;
    }
    getId() {
        return this.id;
    }
    getText() {
        return this.text;
    }
    getUserId() {
        return this.userId;
    }
    getUser() {
        if (!this.user) {
            throw new Error('User in post not available');
        }
        return this.user;
    }
}
exports.Post = Post;
