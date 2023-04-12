import express, { Express } from 'express';
import userRouter from './routes/user.routes';
import coinRouter from './routes/coin.routes';
import userCoinsRouter from './routes/userCoins.routes';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();

app.use(express.json());
const port = process.env.PORT;

const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
}
app.use(cors(options))

app.use('/api/users', userRouter);
app.use('/api/coins', coinRouter);
app.use('/api/user-coins', userCoinsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});