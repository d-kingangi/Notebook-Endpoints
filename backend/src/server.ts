import express, { Request, Response, NextFunction, json }  from 'express'
import notesRouter  from './Routes/notes.route';

const app = express()

app.use(json())

app.use( notesRouter)

app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
})


let port:number = 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`); 
})