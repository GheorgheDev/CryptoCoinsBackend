import { UserDto } from "../types";
import { UserPojo } from "../data/models/user.model";
import { UserRepository } from "../data/repositories/user.repository";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createNewUser(newUser: UserDto): Promise<string> {
        const newUserAsPojo: UserPojo = this.parseDtoIntoPojo(newUser);

        return await this.userRepository.createNewUser(newUserAsPojo)
            .then(newUserId => newUserId)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    async checkUserExist(email: string, password: string): Promise<UserDto | undefined> {
        return await this.userRepository.checkUserExist(email, password)
            .then(user => {
                if (!user) {
                    return undefined;
                }

                return this.parsePojoIntoDto(user);
            })
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    parseDtoIntoPojo(userDto: UserDto): UserPojo {
        return userDto as unknown as UserPojo;
    }

    parsePojoIntoDto(userPojo: UserPojo): UserDto {
        return {
            user_id: userPojo.dataValues.user_id,
            username: userPojo.dataValues.username,
            fullname: userPojo.dataValues.fullname,
            birthdate: userPojo.dataValues.birthdate,
            email: userPojo.dataValues.email,
            password: userPojo.dataValues.password,
            wallet: userPojo.dataValues.wallet,
        }
    }
}