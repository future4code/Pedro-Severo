import express from "express";
import { AddressInfo } from 'net'
import { createUserEndpoint } from './presentation/CreateUser';

const app = express()
app.use(express.json()); // Linha mágica (middleware)

app.post('/user', createUserEndpoint);

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
