import { Router } from 'express';
import NotesController from '../controllers/note.controller';
import authMiddleware from '../middleware/auth-middleware';

const notesrouter = Router();
const notesController = new NotesController();

notesrouter.post('/sendNote', authMiddleware, notesController.sendNote);

export default notesrouter;