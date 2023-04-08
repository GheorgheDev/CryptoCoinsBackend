import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.post('/create', userController.createNewUser);
router.get('/get/user/:email/:password', userController.checkUserExist);

export default router;