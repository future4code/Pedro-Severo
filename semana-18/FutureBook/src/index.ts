import { AddressInfo } from 'net';
import express from 'express';
import { SignUpEndpoint } from './presentation/SignUpEndpoint';
import { LoginEndpoint } from './presentation/LoginEndpoint';
import { CreatePostEndpoint } from './presentation/CreatePostEndpoint';
import { MakeFriendsEndpoint } from './presentation/MakeFriendsEndpoint';
import { UnmakeFriendshipEndpoint } from './presentation/UnmakeFriendshipEndpoint';

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", SignUpEndpoint);

app.post("/login", LoginEndpoint);

app.post("/post", CreatePostEndpoint);

app.post("/make/friend", MakeFriendsEndpoint);

app.delete("/unmake/friendship", UnmakeFriendshipEndpoint);

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});