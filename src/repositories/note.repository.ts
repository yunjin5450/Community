import Notes from '../models/note';
import { Inote } from '../interface/notes';

class NotesRepository {

    sendNote = async({id, nickname, title, content, receiver} : Inote) => {
        const sendNote = await Notes.create({id, nickname, title, content, receiver})
        return sendNote;
    }

    getNote = async({id} : Inote) => {
        const getNote = await Notes.findAll({where:{receiver:id}});
        return getNote;
    }
}

export default NotesRepository;