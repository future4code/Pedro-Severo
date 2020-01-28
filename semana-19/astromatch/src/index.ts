import { AddressInfo } from 'net';
import express from 'express';
import { SignUpEndpoint } from './presentation/SignUpEndpoint';
import { LoginEndpoint } from './presentation/LoginEndpoint';
import { GetAllUsersEndpoint } from './presentation/GetAllUsersEndpoint';
import { MatchEndpoint } from './presentation/MatchEndpoint';
import { UnmatchEndpoint } from './presentation/UnmatchEndpoint';
import { GetAllMatchesEndpoint } from './presentation/GetAllMatchesEndpoint';

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', SignUpEndpoint);

app.post('/login', LoginEndpoint);

app.get('/users', GetAllUsersEndpoint);

app.post('/match', MatchEndpoint);

app.delete('/unmatch', UnmatchEndpoint);

app.get('/matches', GetAllMatchesEndpoint);

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});