import express from 'express';
import { userCoinsController } from '../controllers/userCoins.controller';

const router = express.Router();

router.get('/get/:id', userCoinsController.getUserCoinsByUserId);
router.post('/buy/coins', userCoinsController.buyCoins);
router.post('/sell/coins', userCoinsController.sellCoins);

export default router;