import { AddressInfo } from 'net';
import express from 'express';
import { SignUpEndpoint } from './presentation/SignUpEndpoint';
import { LoginEndpoint } from './presentation/LoginEndpoint';
import { CreatePostEndpoint } from './presentation/CreatePostEndpoint';
import { MakeFriendshipEndpoint } from './presentation/MakeFriendsEndpoint';
import { UnmakeFriendshipEndpoint } from './presentation/UnmakeFriendshipEndpoint';
import { GetFeedEndpoint } from './presentation/GetFeedEndpoint';
import { GetFeedByTypeEndpoint } from './presentation/GetFeedByTypeEndpoint';
import { LikePostEndpoint } from './presentation/LikePostEndpoint';
import { ToCommentEndpoint } from './presentation/ToCommentEndpoint';
import { GetCommentsEndpoint } from './presentation/GetCommentsEndpoint';

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", SignUpEndpoint);

app.post("/login", LoginEndpoint);

app.post("/post", CreatePostEndpoint);

app.post("/make/friend", MakeFriendshipEndpoint);

app.delete("/unmake/friendship", UnmakeFriendshipEndpoint);

app.get("/feed", GetFeedEndpoint);

app.get("/feed/type", GetFeedByTypeEndpoint);

app.post("/like", LikePostEndpoint);

app.post("/post/comment", ToCommentEndpoint);

app.get("/post/comments", GetCommentsEndpoint);

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});