import NotesService from "../services/note.service";
import Express, {Request, Response, NextFunction} from 'express';
import { Inote } from "../interface/notes";

class NotesController {
    public notesService = new NotesService()

    sendNote = async(req: Request, res:Response, next: NextFunction) => {
        const { id, nickname } : Inote = res.locals.user;
        const { title, content, receiver } : Inote = req.body;
        await this.notesService.sendNote({id, nickname, title, content, receiver});
        res.status(201).json({message: "쪽지를 성공적으로 보냈습니다."})
    }

    getNote = async(req:Request, res: Response, next: NextFunction) => {
        const { id }  : Inote = res.locals.user;
        const getNote = await this.notesService.getNote({id});
        res.status(201).json({ getNote });
    }
}


export default NotesController;