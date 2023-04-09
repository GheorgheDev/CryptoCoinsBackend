import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService: UserService = new UserService();

export const userController = {
    createNewUser: (req: Request, res: Response) => {
        try {
            userService.createNewUser(req.body.newUser).then(newUserId => res.json(newUserId));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    checkUserExist: (req: Request, res: Response) => {
        try {
            userService.checkUserExist(req.params.email, req.params.password).then(user => res.json(user));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    getUserById: (req: Request, res: Response) => {
        try {
            userService.getUserById(req.params.id).then(user => res.json(user));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    increaseWallet: (req: Request, res: Response) => {
        try {
            userService.increaseWallet(req.body.user, req.body.wallet).then(newWallet => res.json(newWallet));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    }
}