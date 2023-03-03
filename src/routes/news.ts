import { Router } from "express";
import NewsController from "../controllers/news.controller";
import authMiddleware from "../middleware/auth-middleware";
import adminMiddleware from "../middleware/admin-middleware";
import upload from "../middleware/s3middleware";

const newsrouter = Router();
const newsController = new NewsController();

newsrouter.post('/upload',authMiddleware, upload.single('image'),newsController.newsUpload);
newsrouter.get("/AllNews", newsController.getAllNews);
newsrouter.get("/getNews/:postId", newsController.getNews);
newsrouter.put("/update/:postId", authMiddleware,adminMiddleware,newsController.newsUpdate);
newsrouter.delete("/delete/:postId", authMiddleware, newsController.deleteNews);

export default newsrouter;