import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'pedro',
    password : process.env.SENHA_BANCO,
    database : 'pedro'
  }
});

app.post('/createUser', (req: Request, res: Response) => {

  const query = connection('usuarios_todo').insert(req.body);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  });
});

app.put('/editUser/:id', (req: Request, res: Response) => {
  const userId = req.params.id

  const query = connection('usuarios_todo')
  .where({ id: userId })
  .update({ nickname: req.body.nickname });

  query.then(() => {
    res.send("Usuário modificado com sucesso");
  }).catch(e => {
    res.status(500).send(e)
  });

});

app.delete('/deleteUser/:id', (req: Request, res: Response) => {
  const userId = req.params.id

  const query = connection('usuarios_todo')
  .where('id', userId)
  .del();

  query.then(() => {
    res.send("Usuário deletado com sucesso");
  }).catch(e => {
    res.send(e);
  });
});

app.get('/getUser/:idOuNickname', (req: Request, res: Response) => {
  const userId = req.params.id
  
  const query = connection.raw(`SELECT nickname FROM usuarios_todo WHERE id = "${userId}" | nickname = "${userId}"`);
  query.then(result => {
    res.send(result);
  });
});

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
