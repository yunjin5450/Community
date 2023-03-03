import passport from 'passport';
import Users from '../models/user';
//import KakaoStrategy from 'passport-kakao';
const KakaoStrategy = require('passport-kakao').Strategy;
import dotenv from 'dotenv';
import { Account } from 'aws-sdk';
dotenv.config();

export default () => {

   passport.use(
      'kakao',
      new KakaoStrategy(
         {
            clientID: process.env.KAKAO_ID, 
            callbackURL: '/auth/kakao/callback', 
         },
         async (accessToken: string, refreshToken: string, profile: { id: number; nickname: string; displayName: string; username: string; }, done: any) => {
            try {
               console.log(profile.id)
               const exUser = await Users.findOne({
                  where: { kakaoId: profile.id, provider: 'kakao' },
               });
               //이미 가입된 카카오 프로필이면 성공
               if (exUser) {
                  done(null, exUser); //로그인 인증 완료
               } else { //가입 안된 유저면 회원가입 하고 로그인
                  const newUser = await Users.create({
                    nickname: profile.displayName,
                    username: profile.username,
                    kakaoId: profile.id,
                    provider: 'kakao',
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