import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const express = require('express');
const cors = require('cors');

admin.initializeApp();

const app = express();

app.use(cors());

app.get('/hello', (req: any, res: any) => {
    res.send('hello get')
});

app.post('/hello', (req: any, res: any) => {
    res.send('hello post');
});

export const futureTube = functions.https.onRequest(app);