import { JSONFileManager } from './JSONFileManager';
import * as moment from "moment";
import { Post, PostCreator} from './post';

const newPost: PostCreator = new PostCreator("&Pedro", "&Texto")
const fileManager: JSONFileManager = new JSONFileManager("posts.json");

fileManager.saveToJSON(newPost.createPost())