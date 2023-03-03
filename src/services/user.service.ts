import UserRepository from '../repositories/user.repository';
import * as bcrypt from 'bcrypt';
import {User} from '../interface/user';
import { Error } from '../interface/Error';
import dotenv from 'dotenv';
dotenv.config();


const goId = /^[a-zA-Z0-9]{6,15}$/
const goPassword = /^[a-zA-Z0-9]{8,15}$/

class UserService{
    public userRepository = new UserRepository();

    //회원가입
    signup = async({id, password, confirmPassword, nickname, Email, phone, birth} : User) => {
        
        //필수 입력  
        if(!id || !password || !confirmPassword || !nickname || !Email || !phone) {   
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "필수 정보를 모두 입력해주세요."
            throw err;
        }

        //id 중복검사
        const checkId = await this.userRepository.findUserId({id});
        if(checkId) {
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "이미 가입된 아이디입니다."
            throw err;
        }

        //ninckname 중복검사
        const checkNickname = await this.userRepository.findUserNickname({nickname});
        if(checkNickname) {
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "이미 가입된 닉네임입니다."
            throw err;
        }
    
        //id 확인
        if(!goId.test(id)) {
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "아이디는 최소 6자리 이상으로 해주세요."
            throw err;
        }

        //password 확인
        if(!goPassword.test(password)) {
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "비밀번호는 최소 8자리 이상 입력해주세요."
            throw err;
        }

        //비밀번호와 비밀번호 확인란 불일치
        if(password !== confirmPassword) {            
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "비밀번호와 확인란 비밀번호가 일치하지 않습니다."
            throw err;
        }
        
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        console.log(password);

        const signUp = await this.userRepository.signup({id, password, confirmPassword, nickname, Email, phone, birth});
        return signUp;
    }
    
    //로그인
    login = async({ id, password } : User) => {
        
        //아이디와 패스워드 미입력
        if(!id || !password) {
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "아이디와 패스워드를 모두 입력해주세요."
            throw err;
        };

        //아이디 정보 확인
        const loginData = await this.userRepository.login({id});
        if(!loginData) {
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "일치하는 회원정보가 없습니다."
            throw err;
        };

        //비밀번호 확인
        if(bcrypt.compareSync(password, loginData.password) === false) {
            const err : Error = new Error('UserService Error');
            err.status = 403;
            err.message = "비밀번호가 일치하지 않습니다."
            throw err;
        };
        return loginData;
    }

    //회원탈퇴
    delectUser = async({id} : User) => {    
        const deleteUser = await this.userRepository.delectUser({id});
        return deleteUser;
    }

}
export default UserService