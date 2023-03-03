import News from '../models/news';
import { Inews } from '../interface/news'

class NewsRepository {
    newsUpload = async({userId, nickname, title, content, admin, image} : Inews) => {
        const newsUpload = await News.create({userId, nickname, title, content, admin, image})
        return newsUpload;
    }

    getAllNews = async() => {
        const getAllNews = await News.findAll();
        return getAllNews;
    }

    getNews = async({postId} : Inews) => {
        const getNews = await News.findOne({where:{postId: postId}})
        return getNews;
    }

    newsUpdate = async({postId,userId, title, content, image} : Inews) => {
        const newsUpdate = await News.update({title, content, image}, {where: {postId:postId, userId: userId}});
        console.log(newsUpdate)
        return;
    }

    deleteNews = async({postId, userId} : Inews) => {
        const deleteNews = await News.destroy({where:{postId:postId, userId: userId}});
        return deleteNews;
    }    
}

export default NewsRepository