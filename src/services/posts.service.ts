import PostsRepository from '../repositories/posts.repository';
import { Post } from "../interface/post"
import { Error } from '../interface/Error';



class PostsService{   
    public postsRepository = new PostsRepository();

    createPost = async ({userId, nickname, category, option, title, content, image, likes} : Post) => {  // 게시물 등록

        if (!category || !option || !title || !content) {
            const err: Error = new Error(`postsService Error`);
            err.status = 400;
            err.message = "빈칸을 입력해주세요.";
            console.log(err)
            throw err;
        }
      
        if (image === null) {
            const err: Error = new Error(`postsService Error`);
            err.status = 400;
            err.message = "이미지를 등록해주세요.";
            throw err;
        }

        const createPost = await this.postsRepository.createPost({userId, nickname, category, option, title, content, image, likes})
        return createPost;
    };

    findAllPosts = async () => {  // 전체 조회
        const findAllPosts = await this.postsRepository.findAllPosts();
        return findAllPosts;
    };

    findMyPosts = async ({userId} : Post) => {  // 본인이 등록한 게시물만 조회

        const findPosts = await this.postsRepository.findMyPosts({userId});

        // if (findPosts.length == 0) {
        //     const err: Error = new Error(`postsService Error`);
        //     err.status = 404;
        //     err.message = "등록된 게시물이 없습니다.";
        //     throw err;
        // }
      
        return findPosts;
    };
    
    updatePosts = async ({postId, userId, nickname, category, option, title, content, image, likes} : Post) => {  // 게시물 수정

        // const findpostId = await this.postsRepository.findPostId({postId});

        // // 수정할 게시물이 없을때
        // if (findpostId === null) {
        // const err: Error = new Error(`postsService Error`);
        // err.status = 404;
        // err.message = "수정할 게시물이 없습니다.";
        // throw err;
        // }

        // // 게시물을 등록한 유저 아이디와 지금 정보를 바꾸려는 유저 아이디가 다를때
        // if (userId !== findpostId.dataValues.userId) {
        // const err: Error = new Error(`postsService Error`);
        // err.status = 403;
        // err.message = "게시물을 수정할 권한이 없습니다.";
        // throw err;
        // }

        const updatePost = await this.postsRepository.updatePosts({postId,userId, nickname, category, option, title, content, image, likes});
        return updatePost;
    };
    
    deletePosts = async ({postId, userId} : Post) => {  // 게시물 삭제

        // const findpostId = await this.postsRepository.findPostId({postId});

        // // 해당하는 데이터가 없으면
        // if (findpostId === null) {
        //     const err: Error = new Error(`postsService Error`);
        //     err.status = 404;
        //     err.message = "삭제할 게시물이 없습니다.";
        //     throw err;
        // }
    
        // // 게시물을 삭제하려는 userId와 게시물을 작성한 userId가 다를때
        // if (userId !== findpostId.dataValues.userId) {
        //     const err: Error = new Error(`postsService Error`);
        //     err.status = 403;
        //     err.message = "게시물을 삭제할 권한이 없습니다.";
        //     throw err;
        // }

        const deletePost = await this.postsRepository.deletePosts({postId, userId});
        return deletePost;
    };

}

export default PostsService