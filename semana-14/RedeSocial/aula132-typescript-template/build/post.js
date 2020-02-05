"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Post {
    constructor(name, text) {
        this.name = name;
        this.text = text;
        this.date = moment();
    }
    ;
}
exports.Post = Post;
;
;
class PostCreator extends Post {
    createPost() {
        if (this.name.indexOf('&') === 0) {
            this.name = this.name.replace("&", "").toUpperCase();
        }
        if (this.text.indexOf('&') === 0) {
            this.text = this.text.replace("&", "").toUpperCase();
        }
        ;
        return new Post(this.name, this.text);
    }
    ;
}
exports.PostCreator = PostCreator;
;
//# sourceMappingURL=post.js.map