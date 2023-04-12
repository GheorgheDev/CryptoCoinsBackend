import { CoinsBuyOrSellDto, UserCoinsDto } from "../types";
import { UserCoinsPojo } from "../data/models/userCoins.model";
import { UserCoinsRepository } from "../data/repositories/userCoins.repository";

export class UserCoinsService {
    private _userCoinsRepository: UserCoinsRepository;

    constructor() {
        this._userCoinsRepository = new UserCoinsRepository();
    }

    async getUserCoinsByUserId(userId: string): Promise<UserCoinsDto[]> {
        return await this._userCoinsRepository.getUserCoinsByUserId(userId)
            .then(userCoinsAsPojo => {
                return userCoinsAsPojo.map(userCoinAsPojo => this.parsePojoIntoDto(userCoinAsPojo));
            })
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async buyCoins(coinsToBuy: CoinsBuyOrSellDto): Promise<number> {
        return await this._userCoinsRepository.buyCoins(coinsToBuy)
            .then(walletUpdated => walletUpdated)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async sellCoins(coinsToSell: CoinsBuyOrSellDto): Promise<number> {
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