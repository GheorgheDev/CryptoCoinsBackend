import { Request, Response } from 'express';
import { UserCoinsService } from '../services/userCoins.service';

const userCoinsService: UserCoinsService = new UserCoinsService();

export const userCoinsController = {
    getUserCoinsByUserId: (req: Request, res: Response) => {
        try {
            userCoinsService.getUserCoinsByUserId(req.params.id).then(userCoins => res.json(userCoins));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    buyCoins: (req: Request, res: Response) => {
        try {
            userCoinsService.buyCoins(req.body.coinsToBuy).then(walletUpdated => res.json(walletUpdated));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    sellCoins: (req: Request, res: Response) => {
        try {
            userCoinsService.sellCoins(req.body.coinsToSell).then(walletUpdated => res.json(walletUpdated));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    }
}