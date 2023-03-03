import express, {Router} from 'express';

import userRouter from './user'
import postsRouter from './posts'
import newsRouter from './news';
import commentsRouter from './comments'
import authRouter from './auth'

const router = Router();
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/news', newsRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);

export default router;