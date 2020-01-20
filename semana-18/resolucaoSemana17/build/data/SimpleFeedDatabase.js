"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../business/entities/Post");
const BaseKnexDatabase_1 = require("./BaseKnexDatabase");
const User_1 = require("../business/entities/User");
class SimpleFeedDatabase extends BaseKnexDatabase_1.BaseKnexDatabase {
    getCronologicalFeedForUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT p.id as postId, p.text as postText, u.id as userId, u.name as userName FROM posts p
      JOIN users_relations rel ON p.userId=rel.followedId
      JOIN users u ON rel.followedId=u.id
      WHERE rel.followerId='${userId}';`);
            return result[0].map((post) => {
                return new Post_1.Post(post.postId, post.userId, post.postText, new User_1.User(post.userId, post.userName));
            });
        });
    }
}
exports.SimpleFeedDatabase = SimpleFeedDatabase;
