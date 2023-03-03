import { Router } from "express";
import CommentsController from "../controllers/comments.controller";
import authMiddleware from "../middleware/auth-middleware";

const router = Router();
const commentsController = new CommentsController();

router.post('/:postId', authMiddleware, commentsController.createComment); // 댓글 등록
router.get('/:postId', commentsController.postsComments); // 특정 게시글의 댓글만 조회
router.get('/', authMiddleware, commentsController.findMyComments); // 본인의 댓글 조회
router.patch('/:postId', authMiddleware, commentsController.updateComments); // 댓글 수정
router.delete('/:postId', authMiddleware, commentsController.deleteComments); // 댓글 삭제

export default router;