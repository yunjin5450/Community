import NotesRepository from '../repositories/note.repository';
import { Inote } from '../interface/notes';

class NotesService {
    public notesRepository = new NotesRepository();

    sendNote = async({id, nickname, title, content, receiver} : Inote) => {
        const sendNote = await this.notesRepository.sendNote({id, nickname, title, content, receiver});
        return sendNote;
    }

    getNote = async({id} : Inote) => {
        const getNote = await this.notesRepository.getNote({id});
        return getNote
    }
}

export default NotesService;