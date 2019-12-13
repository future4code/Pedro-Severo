"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const post_1 = require("./post");
const newPost = new post_1.PostCreator("&Pedro", "&Texto");
const fileManager = new JSONFileManager_1.JSONFileManager("posts.json");
fileManager.saveToJSON(newPost.createPost());
//# sourceMappingURL=index.js.map