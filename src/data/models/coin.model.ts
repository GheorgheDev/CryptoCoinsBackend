import { STRING, NUMBER } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
    freezeTableName: true,
    tableName: "coin",
    schema: "public",
    createdAt: false,
    updatedAt: false
})
export class CoinPojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'coin_id'
    })
    coin_id: string;

    @Column({
        type: STRING,
        field: 'name'
    })
    name: string;

    @Column({
        type: NUMBER,
        field: 'value'
    })
    value: number;

    @Column({
        type: STRING,
        field: 'image'
    })
    image: string;

    @Column({
        type: NUMBER,
        field: 'stock'
    })
    stock: number;

    createdAt: Date;

    updatedAt: Date;
}