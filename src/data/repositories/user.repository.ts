import { UserDto } from "../../types";
import { connect } from "../config/db.config";
import { UserPojo } from "../models/user.model";
import { v4 as uuidv4 } from 'uuid';

export class UserRepository {
    private _db: any = {};
    private _userRepository: any;

    constructor() {
        this._db = connect();
        this._userRepository = this._db.sequelize.getRepository(UserPojo);
    }

    async createNewUser(newUser: UserPojo): Promise<string> {
        try {
            newUser.user_id = uuidv4();
            await this._userRepository.create(newUser);
            return newUser.user_id;
        } catch (exception) {
            console.error(exception);
            return '-1';
        }
    }

    async checkUserExist(email: string, password: string): Promise<UserPojo | undefined> {
        try {
            return await this._userRepository.findOne({
                where: {
                    email: email,
                    password: password
                }
            })
        } catch (exception) {
            console.error(exception);
            return undefined;
        }
    }

    async getUserById(userId: string): Promise<UserPojo | undefined> {
        try {
            return await this._userRepository.findByPk(userId);
        } catch (exception) {
            console.error(exception);
            return undefined;
        }
    }

    async increaseWallet(user: UserDto, wallet: number): Promise<number> {
        try {
            await this._userRepository.update({ wallet: user.wallet + wallet }, {
                where: {
                    user_id: user.user_id
                }
            })

            return user.wallet + wallet;
        } catch (exception) {
            console.error(exception);
            return -1;
        }
    }
}