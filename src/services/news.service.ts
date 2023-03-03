import NewsRepository from "../repositories/news.repository";
import { Inews } from "../interface/news";
import { Error } from '../interface/Error';

class NewsService {
    public newsRepository = new NewsRepository();

    newsUpload = async({ userId, nickname, title, content, admin, image} : Inews) => {
        if(!title || !content ){
            const err : Error = new Error('News Error');
            err.status = 403;
            err.message = "빈칸을 입력해주세요."
            throw err;
        }
        const newsUpload = await this.newsRepository.newsUpload({userId, nickname, title, content, admin, image});
        return newsUpload;
    }

    getAllNews = async() => {
        const getAllNews = await this.newsRepository.getAllNews();
        return getAllNews;
    }

    getNews = async({postId} : Inews) => {
        const getNews = await this.newsRepository.getNews({postId});
        return getNews;
    }

    newsUpdate = async({postId, userId, title, content, image} : Inews) => {
        const newsUpdate = await this.newsRepository.newsUpdate({postId, userId, title, content,image});
        return;
    }

    deleteNews = async({userId, postId} : Inews ) => {
        const deleteNews = await this.newsRepository.deleteNews({postId, userId});
        return deleteNews;
    }
}

export default NewsService;