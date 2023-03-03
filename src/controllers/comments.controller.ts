import CommentsService from '../services/comments.service';
import Express, {Request, Response, NextFunction} from 'express';
import { Comment } from '../interface/comment'

class CommentsController {   
    public commentsService = new CommentsService();

    createComment = async (req:Request, res:Response, next: NextFunction) => {   // 댓글 등록
        const { postId } : Comment = req.params;
        const { userId, nickname } : Comment = res.locals.user;
        const { category, comment, likes } : Comment = req.body
        const createComments = await this.commentsService.createComment({postId, userId, category, nickname, comment, likes})
        res.status(201).json({ message: "댓글 등록 완료!", data: createComments })
    };

    postsComments = async (req:Request, res:Response, next: NextFunction) => {  // 특정 게시글의 댓글만 조회
        const { postId } : Comment = req.params;
        const postsComment = await this.commentsService.postsComments({postId});
        res.status(200).json({ data: postsComment });
    };

    findMyComments = async (req:Request, res:Response, next: NextFunction) => {  // 본인의 댓글 조회
        const { userId } : Comment = res.locals.user;
        const myComments = await this.commentsService.findMyComments({userId});
        res.status(200).json({ data: myComments });
    };
    
    updateComments = async (req:Request, res:Response, next: NextFunction) => {  // 댓글 수정
        const { postId } : Comment = req.params;
        const { userId, nickname } : Comment = res.locals.user;
        const { category, comment, likes } : Comment = req.body
        const updateComment = await this.commentsService.updateComments({postId, userId, category, nickname, comment, likes});
        res.status(200).json({ message: "댓글 수정 완료!", data: updateComment });
    };

    deleteComments = async (req:Request, res:Response, next: NextFunction) => {  // 댓글 삭제
        const { postId } : Comment = req.params;
        const { userId } : Comment = res.locals.user;
        const deleteComment = await this.commentsService.deleteComments({postId, userId});
        res.status(200).json({ message: "댓글 삭제 완료!" });
    };    

}

export default CommentsController;