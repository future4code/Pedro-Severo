"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'USUARIO',
        password: 'SENHA',
        database: 'exercicios'
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/ping': 'retorna o texto pong',
            '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
        }
    };
    // Exemplo de retorno de um JSON
    res.send(resposta);
});
app.get('/ping', (req, res) => {
    const hasQueryString = Object.values(req.query).length > 0;
    if (hasQueryString) {
        // Exemplo de retorno de um JSON
        res.send(req.query);
    }
    else {
        // Exemplo de retorno de texto "puro"
        res.send('pong (nenhuma query string foi passada)');
    }
});
app.get('/hello/:name', (req, res) => {
    const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;
    // Exemplo de retorno de HTML
    res.send(resposta);
});
app.post('/mirror/:cor', (req, res) => {
    let responseBody;
    if (req.params.cor !== "0") {
        responseBody = Object.assign(Object.assign({}, req.body), { corPredileta: req.params.cor });
    }
    else {
        responseBody = Object.assign(Object.assign({}, req.body), { corPredileta: "NAO INFORMADA" });
    }
    res.send(responseBody);
});
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
