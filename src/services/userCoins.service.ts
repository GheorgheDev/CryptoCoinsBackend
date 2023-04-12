import { UserCoinsDto } from "../types";
import { UserCoinsPojo } from "../data/models/userCoins.model";
import { UserCoinsRepository } from "../data/repositories/userCoins.repository";

export class UserCoinsService {
    private _userCoinsRepository: UserCoinsRepository;

    constructor() {
        this._userCoinsRepository = new UserCoinsRepository();
    }

    async buyCoins(coinsToBuy: any): Promise<number> { // TODO: quitar el any
        return await this._userCoinsRepository.buyCoins(coinsToBuy)
            .then(walletUpdated => walletUpdated)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async sellCoins(coinsToSell: any): Promise<number> { // TODO: quitar el any
        return await this._userCoinsRepository.sellCoins(coinsToSell)
            .then(walletUpdated => walletUpdated)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    parseDtoIntoPojo(userCoinsDto: UserCoinsDto): UserCoinsPojo {
        return userCoinsDto as unknown as UserCoinsPojo;
    }

    parsePojoIntoDto(userCoinsPojo: UserCoinsPojo): UserCoinsDto {
        return {
            user_id: userCoinsPojo.dataValues.user_id,
            coin_id: userCoinsPojo.dataValues.coin_id,
            amount: userCoinsPojo.dataValues.amount
        }
    }
}