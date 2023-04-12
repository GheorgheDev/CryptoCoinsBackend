import { Request, Response } from 'express';
import { CoinService } from '../services/coin.service';

const coinService: CoinService = new CoinService();

export const coinController = {
    getCoinById: (req: Request, res: Response) => {
        try {
            coinService.getCoinById(req.params.id).then(coin => res.json(coin));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    getAllCoins: (_req: any, res: any) => {
        try {
            coinService.getAllCoins()
                .then(coins => res.json(coins))
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    }
}