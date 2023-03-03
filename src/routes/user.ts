import { Router } from "express";
import UserController from "../controllers/user.controller";
import authMiddleware from "../middleware/auth-middleware";

const router = Router();
const userController = new UserController();

//1.회원가입
router.post('/signup', userController.signup);

//2.로그인 (토큰 발급)
router.post('/login', userController.login);

//3.로그인 (유저정보)
//router.post('loginInfo', authMiddleware, userController.loginInfo);

//4.회원탈퇴
router.delete('/delect', authMiddleware, userController.delectUser);


export default router;
