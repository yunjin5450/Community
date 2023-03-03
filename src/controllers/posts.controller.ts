import PostsService from '../services/posts.service';
import Express, {Request, Response, NextFunction} from 'express';
import { Post } from '../interface/post'
import { Error } from '../interface/Error';


// class CustomError_Class extends Error {
   
//        data: any;
//        status: number;
//        message: string;
    
// };

class PostsController {   
    public postsService = new PostsService();

    createPost = async (req:Request, res:Response, next: NextFunction) => {   // 게시물 등록
        try {
            const { userId, nickname } : Post = res.locals.user;
            const { category, option, title, content, image, likes } : Post = req.body
            const createPosts = await this.postsService.createPost({userId, nickname, category, option, title, content, image, likes})
            res.status(201).json({ message: "게시물 등록 완료!", data: createPosts })
        } catch (errs) {
            const err: Error = new Error(`뭐농`);
            //if (err instanceof CustomError_Class) {
                res.status(err.status || 400).json({message: err.message});
            //}
        }
        
    };

    findAllPosts = async (req:Request, res:Response, next: NextFunction) => {  // 전체 조회
        const allPosts = await this.postsService.findAllPosts();
        res.status(200).json({ data: allPosts });
    };

    findMyPosts = async (req:Request, res:Response, next: NextFunction) => {  // 본인의 게시물 조회
        // try {
            const { userId } : Post = res.locals.user;
            const posts = await this.postsService.findMyPosts({userId});
            res.status(200).json({ data: posts });
        // } catch (err:unknown) {
        //     if (err instanceof CustomError_Class) {
        //         res.status(err.statusCode || 400).json({message: err.message});
        //     }
        // }
    };
    
    updatePosts = async (req:Request, res:Response, next: NextFunction) => {  // 게시물 수정
        // try {
            const { postId } : Post = req.params;
            const { userId, nickname } : Post = res.locals.user;
            const { category, option, title, content, image, likes } : Post = req.body
            const updatePosts = await this.postsService.updatePosts({postId, userId, nickname, category, option, title, content, image, likes});
            res.status(200).json({ message: "게시물 수정 완료!", data: updatePosts });
        // } catch (err:unknown) {
        //     if (err instanceof CustomError_Class) {
        //         res.status(err.statusCode || 400).json({message: err.message});
        //     }
        // }
    };

    deletePosts = async (req:Request, res:Response, next: NextFunction) => {  // 게시물 삭제
        // try {
            const { postId } : Post = req.params;
            const { userId } : Post = res.locals.user;
            const deletePost = await this.postsService.deletePosts({postId, userId});
            res.status(200).json({ message: "게시물 삭제 완료!" });
        // } catch (err:unknown) {
        //     if (err instanceof CustomError_Class) {
        //         res.status(err.statusCode || 400).json({message: err.message});
        //     }
        // }    
    };    

}

export default PostsController;