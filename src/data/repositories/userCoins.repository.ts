import { connect } from "../config/db.config";
import { UserCoinsPojo } from "../models/userCoins.model";
import { CoinRepository } from "./coin.repository";
import { UserRepository } from "./user.repository";

export class UserCoinsRepository {
    private _db: any = {};
    private _userCoinsRepository: any;
    private _userRepository: UserRepository;
    private _coinRepository: CoinRepository;

    constructor() {
        this._db = connect();
        this._userCoinsRepository = this._db.sequelize.getRepository(UserCoinsPojo);
        this._userRepository = new UserRepository();
        this._coinRepository = new CoinRepository();
    }

    async getUserCoinsByUserId(userId: string): Promise<UserCoinsPojo[]> {
        return await this._userCoinsRepository.findAll({
            where: {
                user_id: userId
            }
        });
    }

    async checkUserCoinsExist(user_id: string, coin_id: string): Promise<UserCoinsPojo> {
        return await this._userCoinsRepository.findOne({
            where: {
                coin_id: coin_id,
                user_id: user_id
            }
        });
    }

    async buyCoins(coinsToBuy: any): Promise<number> { // TODO: quitar el any
        try {
            await this._coinRepository.updateCoinStock(coinsToBuy.coin_id, coinsToBuy.stock);

            await this._userRepository.updateUserWallet(coinsToBuy.user_id, coinsToBuy.wallet);

            const userCoinsExist = await this.checkUserCoinsExist(coinsToBuy.user_id, coinsToBuy.coin_id);

            if (userCoinsExist) {
                const amountUpdated = parseInt(userCoinsExist.dataValues.amount) + parseInt(coinsToBuy.amount);

                await this._userCoinsRepository.update({ amount: amountUpdated }, {
                    where: {
                        user_id: coinsToBuy.user_id,
                        coin_id: coinsToBuy.coin_id
                    }
                })
            } else {
                await this._userCoinsRepository.create(coinsToBuy);
            }

            return coinsToBuy.wallet;
        } catch (exception) {
            console.error(exception);
            return -1;
        }
    }

    async sellCoins(coinsToSell: any): Promise<number> { // TODO: quitar el any
        try {
            await this._coinRepository.updateCoinStock(coinsToSell.coin_id, coinsToSell.stock);

            await this._userRepository.updateUserWallet(coinsToSell.user_id, coinsToSell.wallet);

            const userCoinsExist = await this.checkUserCoinsExist(coinsToSell.user_id, coinsToSell.coin_id);
            const amountUpdated = parseInt(userCoinsExist.dataValues.amount) - parseInt(coinsToSell.amount);

            if (amountUpdated > 0) {
                await this._userCoinsRepository.update({ amount: amountUpdated }, {
                    where: {
                        user_id: coinsToSell.user_id,
                        coin_id: coinsToSell.coin_id
                    }
                })
            } else {
                await this._userCoinsRepository.destroy({
                    where: {
                        user_id: coinsToSell.user_id,
                        coin_id: coinsToSell.coin_id
                    }
                });
            }

            return coinsToSell.wallet;
        } catch (exception) {
            console.error(exception);
            return -1;
        }
    }
}