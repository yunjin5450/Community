import UserService from '../services/user.service';
import Express, {Request, Response, NextFunction} from 'express';
import { User } from '../interface/user'
import token from '../utils/token';


class UserController {
    public userService = new UserService();  

    //회원가입
    signup = async(req:Request, res:Response, next: NextFunction)=>{
        try{       
        const { id, password, confirmPassword, nickname, Email, phone, birth } : User = req.body;
            await this.userService.signup({id, password, confirmPassword, nickname, Email, phone, birth});
            res.status(201).send({message: "회원가입 완료"});    
        }catch(err:any){
            res.status(400).json({message: err.message});
            }
    }

    //로그인
    login = async(req:Request, res:Response, next: NextFunction)=>{
        try{
        const { id, password } : User = req.body;
        await this.userService.login({id, password});
        const createToken = await token.createToken({id}); 
        res.status(201).json({message: "로그인이 되었습니다.", createToken});
    }catch(err:any){
        res.status(400).json({message: err.message});
        }
} 

    //회원탈퇴
    delectUser = async(req:Request, res:Response, next: NextFunction)=>{
        try{
        const { id } = res.locals.user;
            await this.userService.delectUser({id});
            res.status(200).json({message : '탈퇴되었습니다.'});
        }catch(error){
            res.status(400).json({error: "탈퇴중 오류가 발생했습니다."});
        }
    }
}

export default UserController;