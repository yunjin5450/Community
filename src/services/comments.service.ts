import CommentsRepository from '../repositories/comments.repository';
import { Comment } from "../interface/comment"

class CommentsService{   
    public commentsRepository = new CommentsRepository();

    createComment = async ({postId, userId, category, nickname, comment, likes} : Comment) => {  // 댓글 등록
        const createComments = await this.commentsRepository.createComment({postId, userId, category, nickname, comment, likes})
        return createComments;
    };
    
    postsComments = async ({postId} : Comment) => {  // 특정 게시글의 댓글만 조회
        const postsComment = await this.commentsRepository.postsComments({postId});
        return postsComment;
    };
   
    findMyComments = async ({userId} : Comment) => {  // 본인의 댓글 조회
        const myComments = await this.commentsRepository.findMyComments({userId});
        return myComments;
    };
    
    updateComments = async ({postId, userId, category, nickname, comment, likes} : Comment) => {  // 댓글 수정
        const updateComment = await this.commentsRepository.updateComments({postId, userId, category, nickname, comment, likes});
        return updateComment;
    };
    
    deleteComments = async ({postId} : Comment) => {  // 댓글 삭제
        const deleteComment = await this.commentsRepository.deleteComments({postId});
        return deleteComment;
    };

}

export default CommentsService