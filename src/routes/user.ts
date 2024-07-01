import express from 'express';
import { UserController } from '../controller/user';
const router = express.Router();

router.route("/user").post(UserController.handleAddUserController)


export default router;