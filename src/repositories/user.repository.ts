import Users from '../models/user';
import {User} from '../interface/user';
import token from '../utils/token';


class UserRepository {
    
    //회원가입
    signup = async({id, password, nickname, Email, phone, birth} : User)=>{
        const signUp = await Users.create({id, password, nickname, Email, phone, birth});
        return signUp;
    }

    //유저 id 찾기
    findUserId = async({id} : User) => {
    const userId = await Users.findOne({where : {id}});
    return userId;
    }

    //유저 nickname 찾기
    findUserNickname = async({nickname} : User) => {
    const nickName = await Users.findOne({where: {nickname}});
    return nickName;
    }


    //로그인
    login = async({id, password} : User)=>{
        const login = await Users.findOne({where: {id}});
        return login;
    }

    //회원탈퇴
    delectUser = async({id} : User) => {
        const delectUSer = await Users.destroy({where: {id}});
        return delectUSer;
    }

}

export default UserRepository