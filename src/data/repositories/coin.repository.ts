import { QueryTypes } from "sequelize";
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

    async getAllCoinsWithUserCoins(userId: string): Promise<any[]> { // TODO: quitar el any
        try {
            return await this._db.sequelize.query(`SELECT coin.coin_id, name, value, image, stock, amount 
                                                   FROM coin 
                                                   FULL JOIN user_coins 
                                                   ON user_coins.coin_id = coin.coin_id
                                                   WHERE user_id IS NULL OR user_id = ?
                                                   ORDER BY amount;`,
                {
                    replacements: [userId],
                    type: QueryTypes.SELECT
                });
        } catch (exception) {
            console.error(exception);
            return [];
        }
    }
}