import express, { Express } from 'express';
import userRouter from './routes/user.routes';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
/*
  Es un middleware que permite analizar el body de una petición que contiene datos en formato JSON y convertirlo
  en un objeto de JS para poder manipularlo y usarlo
*/
app.use(express.json());
const port = process.env.PORT;

app.use('/api/users', userRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});