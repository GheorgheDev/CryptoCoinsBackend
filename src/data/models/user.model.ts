import { STRING, NUMBER, DATE } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
    freezeTableName: true,
    tableName: "user",
    schema: "public",
    createdAt: false,
    updatedAt: false
})
export class UserPojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'user_id'
    })
    user_id: string;

    @Column({
        type: STRING,
        field: 'username'
    })
    username: string;

    @Column({
        type: STRING,
        field: 'fullname'
    })
    fullname: string;

    @Column({
        type: DATE,
        field: 'birthdate'
    })
    birthdate: Date;

    @Column({
        type: STRING,
        field: 'email'
    })
    email: string;

    @Column({
        type: STRING,
        field: 'password'
    })
    password: string;

    @Column({
        type: NUMBER,
        field: 'wallet'
    })
    wallet: number;

    createdAt: Date;

    updatedAt: Date;
}