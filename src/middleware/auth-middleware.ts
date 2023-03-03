import jwt from 'jsonwebtoken';
import Express, {Request, Response, NextFunction} from 'express';
import Users from '../models/user';
import type { JwtPayload } from 'JsonWebToken';
import dotenv from 'dotenv';
dotenv.config();
const JWTSECRETKEY : string = process.env.SECRET_KEY as string


export default async(req:Request, res:Response, next: NextFunction)=>{
    try{
    const accessToken = req.headers.authorization;
    if(!accessToken) {
        return res.status(400).json({errormessage: "로그인이 필요합니다."});
    }

    const [tokenType, tokenValue] = accessToken.split(" ");
    if(tokenType !== "Bearer") {
        return res.status(400).send({errormessage: "로그인 후 이용 가능합니다."})
    }

    const myToken = verifyToken(tokenValue);
    if (myToken == "jwt expired" || myToken == undefined) {
        const decodeJWT = jwt.decode(tokenValue) as JwtPayload
        const id = decodeJWT.id;
        const refreshToken = decodeJWT.refreshToken;
        const refToken = await Users.findOne({where:{id:id, refreshToken: refreshToken}});
        if(!refToken){
            res.status(400).json({message:"다시 로그인해주세요"})
        }
        const accessToken = jwt.sign({id: id}, process.env.SECRET_KEY!, {expiresIn: '1h'});
        res.status(201).json({message: "access토큰 재발급", accessToken});
    } else {
        const { userId } = jwt.verify(tokenValue, JWTSECRETKEY) as JwtPayload
        const user = await Users.findOne({ where: userId });
        res.locals.user = user;
        next();
    }
    }catch(error){
    return res.status(400).json({error: '로그인이 필요합니다.'});
    }
    

    function verifyToken(token: string) {
    try{
        return jwt.verify(token, JWTSECRETKEY);
    }catch(error){
        return error;
    }
    }
}