import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.post('/create', userController.createNewUser);
router.get('/get/user/:email/:password', userController.checkUserExist);
router.get('/get/user/:id', userController.getUserById);
router.patch('/increase-wallet', userController.increaseWallet);

export default router;