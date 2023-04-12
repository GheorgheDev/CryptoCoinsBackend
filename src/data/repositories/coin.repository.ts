import { connect } from "../config/db.config";
import { CoinPojo } from "../models/coin.model";

export class CoinRepository {
    private _db: any = {};
    private _coinRepository: any;

    constructor() {
        this._db = connect();
        this._coinRepository = this._db.sequelize.getRepository(CoinPojo);
    }

    async getCoinById(coindId: string): Promise<CoinPojo | undefined> {
        try {
            return await this._coinRepository.findByPk(coindId);
        } catch (exception) {
            console.error(exception);
            return undefined;
        }
    }

    async getAllCoins(): Promise<CoinPojo[]> {
        try {
            return await this._coinRepository.findAll();
        } catch (exception) {
            console.error(exception);
            return [];
        }
    }

    async updateCoinStock(coinId: string, stockUpdated: number): Promise<void> {
        await this._coinRepository.update({ stock: stockUpdated }, {
            where: {
                coin_id: coinId
            }
        })
    }
}