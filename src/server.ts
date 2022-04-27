import express, { Request, Response } from 'express';
import createConnection from './database';
import 'dotenv/config';
import { routes } from './routes';

const app = express();

createConnection().then(() => {
  console.log("Database started at port 5432!");
});

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("Server started at port 3333!");
});