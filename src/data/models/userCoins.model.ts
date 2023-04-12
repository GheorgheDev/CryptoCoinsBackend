import { STRING, NUMBER } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
    freezeTableName: true,
    tableName: "user_coins",
    schema: "public",
    createdAt: false,
    updatedAt: false
})
export class UserCoinsPojo extends Model {
    @Column({
        type: STRING,
        field: 'user_id'
    })
    user_id: string;

    @Column({
        primaryKey: true,
        type: STRING,
        field: 'coin_id'
    })
    coin_id: string;

    @Column({
        type: NUMBER,
        field: 'amount'
    })
    amount: number;

    createdAt: Date;

    updatedAt: Date;
}