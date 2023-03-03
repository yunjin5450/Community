import passport from 'passport';
import Users from '../models/user';
import * as bcrypt from 'bcrypt';
//const NaverStrategy = require('passport-naver-v2').Strategy;
const { Strategy: NaverStrategy, Profile: NaverProfile } = require('passport-naver-v2');
import dotenv from 'dotenv';
dotenv.config();

export default () => {
   passport.use(
      'naver',
      new NaverStrategy(
         {
            clientID: process.env.NAVER_ID,
            clientSecret: process.env.NAVER_SECRET,
            callbackURL: '/auth/naver/callback',
         },
         async (accessToken:string, refreshToken:string, profile:{ id: number; email: string; nickname: string; mobile: string; birthday: string;}, done:any) => {
            console.log('naver profile : ', profile);
            try {
               const exUser = await Users.findOne({
                  where: { naverId: profile.id, provider: 'naver' },
               });
               if (exUser) {
                  done(null, exUser);
               } else {
                  const newUser =
                   await Users.create({
                     Email: profile.email,
                     nickname: profile.nickname,
                     phone: profile.mobile,
                     birth: profile.birthday, 
                     naverId: profile.id,
                     provider: 'naver',
                     accessToken: accessToken,
                     refreshToken: refreshToken
                  });
                  done(null, newUser);
               }
            } catch (error) {
               console.error(error);
               done(error);
            }
         },
      ),
   );
};