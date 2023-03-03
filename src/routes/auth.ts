import { Router } from "express";
import passport from "passport";
import Express, {Request, Response, NextFunction} from 'express';
import google from '../passport/googleStrategy';
import naver from '../passport/naverStrategy';
import kakao from '../passport/kakaoStrategy';
import Users from '../models/user';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

//Naver
router.get('/naver', passport.authenticate('naver',))   
router.get('/naver/callback', 
    passport.authenticate('naver', { failureRedirect: '/' }),(req:Request, res:Response) => {
        res.redirect('/');
    },
    );
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((id, done) => {
        Users.findOne({ where: { id } })
            .then(user => done(null, user))
            .catch(err => done(err));
    });
    naver();

//Google
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req:Request, res:Response) => {
        res.redirect('/');
    },
    );

    passport.serializeUser((user, done) => {
        done(null, user);
    });
   
    passport.deserializeUser((id, done) => {
        Users.findOne({ where: { id } })
           .then(user => done(null, user))
           .catch(err => done(err));
    });
    google();  

//Kakao
router.get('/kakao', passport.authenticate('kakao'));
router.get(
    '/kakao/callback',
    passport.authenticate('kakao', {
       failureRedirect: '/', 
    }),
    (req:Request, res:Response) => {
       res.redirect('/');
    },
 );

    passport.serializeUser((user, done) => {
    done(null, user);
 });

    passport.deserializeUser((id, done) => {
    Users.findOne({ where: { id } })
       .then(user => done(null, user))
       .catch(err => done(err));
 });

    kakao();

export default router;

