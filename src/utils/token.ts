import jwt from "jsonwebtoken";
import {User} from "../interface/user";
import dotenv from "dotenv";
import Users from "../models/user";

dotenv.config();

//accessToken & refreshToken 'sign'사용해서 생성
export default {
    createToken : async({id} : User) => {
        const accessToken = jwt.sign({id: id}, process.env.SECRET_KEY!, {expiresIn: '10m'});
        const refreshToken = jwt.sign({id: id}, process.env.SECRET_KEY!, {expiresIn: '1m'});
        await Users.update({refreshToken: refreshToken}, {where: {id}});
        return {accessToken: `Bearer ${accessToken}`};
    }
}