import { Request, Response } from "express";
import {v4} from 'uuid'
import { note } from "../Interfaces/notes";
import { sqlConfig } from "../Config/sql.config";
import mssql from 'mssql';

const notes: note[] = []

export const createnote = async(req: Request, res: Response)=>{
    try {
        const id = v4()

        console.log(id);

        const createdAt = new Date();

        const {title, content}:note = req.body

        // const {title, content}:note = req.body

        

        // const newnote = {note_id:id, title, content, createdAt}  

        // notes.push(newnote)

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("note_id", mssql.VarChar, id)
        .input("title", mssql.VarChar, title)
        .input("content", mssql.VarChar, content)
        .input("createdAt", mssql.VarChar, createdAt)
        .execute('createnote')).rowsAffected

        console.log(result)

        return res.json({
            message: "Note created successfully",
        })

    } catch (error) {
        return res.json({error})
    }
}

export const getnotes =  async(req: Request, res:Response)=>{
    try {
        const pool = await mssql.connect(sqlConfig);
        let allnotes = (await pool.request().execute('getnotes')).recordset

        return res.status(200).json({
            notes: allnotes
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getOnenote = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let note = (await pool.request().input("note_id", id).execute('getOnenote')).recordset

        return res.json({
            note
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updatenote = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const {title, content}:note = req.body

        const createdAt = new Date();

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("note_id", mssql.VarChar, id)
        .input("title", mssql.VarChar, title)
        .input("content", mssql.VarChar, content)
        .input("createdAt", mssql.VarChar, createdAt)
        .execute('updatenote')).rowsAffected

        console.log(result)

        return res.status(200).json({
            message: "Note updated successfully"
        })
    } catch (error) {
        return res.json({error})
    }
}

export const deletenote = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("note_id", mssql.VarChar, id)
        .execute('deletenote')
        ).rowsAffected

        if(result[0] == 0){
            return res.status(201).json({
                error: "Note not found"
            })
        }else{
            return res.status(200).json({
                message: "Note deleted successfully"
            })
        }
    } catch (error) {
        return res.json({error})
    }
}