import { STRING, NUMBER, DATE } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
    freezeTableName: true, // Esta propiedad se usa para evitar que Sequelize modifique el nombre de la tabla en la base de datos al crear un modelo
    tableName: "user", // Es importante tener esta propiedad si la anterior esta a true para saber el nombre de la tabla en la BBDD
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