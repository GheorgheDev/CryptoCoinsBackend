import express from 'express';
import { coinController } from '../controllers/coin.controller';

const router = express.Router();

router.get('/get/coin/:id', coinController.getCoinById);
router.get('/get/all', coinController.getAllCoins);

export default router;