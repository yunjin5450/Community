import jwt from 'jsonwebtoken';
import { Users } from '../models/user';
import Express, {Request, Response, NextFunction} from 'express';
import { User } from '../interface/user';
import type { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWTSECRETKEY : string = process.env.SECRET_KEY as string;

export default async(req: Request, res: Response, next: NextFunction) => {
    const {admin} = res.locals.user
    console.log(admin)
    if (admin == true) {
        next();
    } else {
        res.status(400).json({message:"관리자가 아닙니다."})
    }
}
