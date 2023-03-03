import { Router } from "express";
import PostsController from "../controllers/posts.controller";
import authMiddleware from "../middleware/auth-middleware";

const router = Router();
const postsController = new PostsController();

router.post('/', authMiddleware, postsController.createPost); // 게시물 등록
router.get('/', postsController.findAllPosts); // 전체 조회
router.get('/my', authMiddleware, postsController.findMyPosts); // 본인이 등록한 게시물만 조회
router.patch('/:postId', authMiddleware, postsController.updatePosts); // 게시물 수정
router.delete('/:postId',authMiddleware, postsController.deletePosts); // 게시물 삭제

export default router;
