import { CoinDto } from "../types";
import { CoinPojo } from "../data/models/coin.model";
import { CoinRepository } from "../data/repositories/coin.repository";

export class CoinService {
    private _coinRepository: CoinRepository;

    constructor() {
        this._coinRepository = new CoinRepository();
    }

    async getCoinById(coinId: string): Promise<CoinDto> {
        return await this._coinRepository.getCoinById(coinId)
            .then(coinAsPojo => this.parsePojoIntoDto(coinAsPojo))
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async getAllCoinsWithUserCoins(userId: string): Promise<any[]> { // TODO: quitar el any
        return await this._coinRepository.getAllCoinsWithUserCoins(userId)
            .then(coins => coins);
    }

    parseDtoIntoPojo(coinDto: CoinDto): CoinPojo {
        return coinDto as unknown as CoinPojo;
    }

    parsePojoIntoDto(coinPojo: CoinPojo): CoinDto {
        return {
            coin_id: coinPojo.dataValues.coin_id,
            name: coinPojo.dataValues.name,
            value: coinPojo.dataValues.value,
            image: coinPojo.dataValues.image,
            stock: coinPojo.dataValues.stock
        }
    }
}