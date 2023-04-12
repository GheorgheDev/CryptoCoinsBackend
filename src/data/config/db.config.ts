import { Sequelize } from 'sequelize-typescript';
import { UserPojo } from '../models/user.model';
import { CoinPojo } from '../models/coin.model';
import { UserCoinsPojo } from '../models/userCoins.model';
import dotenv from 'dotenv';

dotenv.config();

export const connect = () => {
    const db_hostname = process.env.DB_HOSTNAME;
    const db_port = parseInt(process.env.DB_PORT);
    const db_name = process.env.DB_NAME;
    const db_username = process.env.DB_USERNAME;
    const db_password = process.env.DB_PASSWORD;
    const db_schema = process.env.DB_SCHEMA;
    const db_dialect: any = process.env.DB_DIALECT;

    const dbConfig = new Sequelize(db_name, db_username, db_password, {
        host: db_hostname,
        dialect: db_dialect,
        schema: db_schema,
        port: db_port,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 200000,
            idle: 5000
        }
    })

    dbConfig.addModels([UserPojo, CoinPojo, UserCoinsPojo]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = dbConfig;

    return db;
}