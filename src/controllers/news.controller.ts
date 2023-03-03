import NewsService from "../services/news.service";
import Express, {Request, Response, NextFunction} from 'express';
import { Inews } from "../interface/news";
import { MulterS3File } from "../interface/multerS3";
import { Error } from "../interface/Error";



class NewsController {
    public newsService = new NewsService()

    newsUpload = async(req: Request, res: Response, next: NextFunction) => {
        try{
        const {userId, nickname, admin} : Inews = res.locals.user;
        const {title, content} : Inews = req.body;
        const file = req.file as MulterS3File;
        console.log(file)
        const image = file.location;
        await this.newsService.newsUpload({userId, nickname, title, content, admin, image});
        res.status(201).json({message:"뉴스가 업로드 되었습니다."})
        }
        catch(err:any){
        res.status(403).json({message: err.message});
        }
    }

    getAllNews = async(req: Request, res:Response, next: NextFunction) => {
        const getAllNews = await this.newsService.getAllNews();
        res.status(201).json({message:"모든 뉴스 조회", getAllNews})
    }

    getNews = async(req: Request, res:Response, next: NextFunction) => {
        const { postId } : Inews = req.params;
        const getNews = await this.newsService.getNews({postId});
        res.status(201).json({getNews, message:"조회 완료"})
    }

    newsUpdate = async(req: Request, res:Response, next: NextFunction) => {
        const { postId } : Inews = req.params;
        const { userId } : Inews = res.locals.user;
        const { title, content, image } : Inews = req.body;
        const newsUpdate = await this.newsService.newsUpdate({postId, userId, title, content, image});
        res.status(201).json({message: "뉴스가 수정되었습니다."})
    }

    deleteNews = async(req:Request, res:Response, next:NextFunction) => {
        const { postId } : Inews = req.params;
        const { userId } : Inews = res.locals.user;
        const deleteNews = await this.newsService.deleteNews({postId, userId});
        res.status(201).json({message:"뉴스가 삭제되었습니다."})
    }
}

export default NewsController;