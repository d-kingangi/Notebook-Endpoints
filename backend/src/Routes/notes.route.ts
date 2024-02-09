import { Router } from "express";
import { createnote, getnotes, getOnenote, deletenote, updatenote } from "../Controllers/note.controller";

const noteRouter = Router()

noteRouter.post('/', createnote)
noteRouter.get('/', getnotes)
noteRouter.put('/update/:id', updatenote)
noteRouter.get('/:id', getOnenote)
noteRouter.delete('/delete/:id', deletenote)

export default noteRouter