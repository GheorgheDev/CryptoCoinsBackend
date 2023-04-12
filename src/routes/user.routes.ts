import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.post('/create/user', userController.createNewUser);
router.get('/get/user/:email/:password', userController.checkUserExist);
router.get('/get/user/:id', userController.getUserById);
router.patch('/increase-wallet/user', userController.increaseWallet);

export default router;