import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();
import Users from '../models/user';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

export default () => {
   passport.use(
      'google',
      new GoogleStrategy(
         {
            clientID: process.env.GOOGLE_ID, 
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/auth/google/callback', 
         },
         async(accessToken:string, refreshToken:string, profile: { id: number; displayName: string; nickname: string; }, done:any) => {
            console.log('google profile : ', profile);
            try {
               const exUser = await Users.findOne({
                  where: { googleId: profile.id, provider: 'google' },
               });
               if (exUser) {
                  done(null, exUser); // 로그인 인증 완료
               } else {
                  const newUser = await Users.create({
                     nickname: profile.displayName,
                     googleId: profile.id,
                     provider: 'google',
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
