import Posts from '../models/posts';
import { Post } from '../interface/post'

class PostsRepository {
    
    createPost = async ({userId, nickname, category, option, title, content, image, likes} : Post) => {  // 게시물 등록
        const createPost = await Posts.create({userId, nickname, category, option, title, content, image, likes})
        return  createPost;
    };

    findAllPosts = async () => {  // 전체 조회
        const allPosts = await Posts.findAll();
        return allPosts;
    };

    findMyPosts = async ({userId} : Post) => {  // 본인이 등록한 게시물만 조회
        const allPosts = await Posts.findAll({ where: { userId } });
        return allPosts;
    };

    updatePosts = async ({postId,userId, nickname, category, option, title, content, image, likes} : Post) => {  // 게시물 수정
        const updatePost = await Posts.update(
            { nickname, category, option, title, content, image, likes },
            { where: { postId, userId } }
        );
        const updatePosts = await Posts.findOne({ where: { postId } });
        return updatePosts;
    };

    findPostId = async ({postId}: Post) => {  //postId 불러오기
        const PostId = await Posts.findByPk(postId);

        return PostId;
    };

    deletePosts = async ({postId, userId} : Post) => {  // 게시물 삭제
        const deletePost = await Posts.destroy({ where: { postId, userId } });
        return deletePost;
    };

}

export default PostsRepository