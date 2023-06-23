import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './routes/route.js';

const app = express();


dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', route)
const port  = 8000;


const username = process.env.db_username;
const password = process.env.db_password;

Connection( username, password);



app.listen(port, ()=>{
    console.log(`server is running on Port: ${port}`);
})

