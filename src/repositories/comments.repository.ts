import Comments from '../models/comments';
import { Comment } from '../interface/comment'

class CommentsRepository {
    
    createComment = async ({postId, userId, category, nickname, comment, likes} : Comment) => {  // 댓글 등록
        const createComments = await Comments.create({postId, userId, category, nickname, comment, likes})
        return  createComments;
    };

    postsComments = async ({postId} : Comment) => {  // 특정 게시글의 댓글만 조회
        const postsComment = await Comments.findAll({ where: { postId } });
        return postsComment;
    };
    
    findMyComments = async ({userId} : Comment) => {  // 본인의 댓글 조회
        const myComments = await Comments.findAll({ where: { userId } });
        return myComments;
    };

    updateComments = async ({postId, userId, category, nickname, comment, likes} : Comment) => {  // 댓글 수정
        const updateComment = await Comments.update(
            { category, nickname, comment, likes },
            { where: { postId, userId } }
        );
        const updateComments = await Comments.findOne({ where: { postId } });
        return updateComments;
    };

    deleteComments = async ({postId, userId} : Comment) => {  // 댓글 삭제
        const deleteComment = await Comments.destroy({ where: { postId, userId } });
        return deleteComment;
    };

}

export default CommentsRepository