import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import {v4 as uuidv4} from 'uuid'
import { CreateDateReadUseCase } from "./CreateDateReadUseCase";

class CreateDateReadController {
  constructor(private createDateReadUseCase: CreateDateReadUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const { idAccount, DateRead } = req.body;
    const id = uuidv4();


    await collections.dateRead.insertOne({id, idAccount, DateRead, created_at: new Date(),}).then((result) => {
      console.log(result);
      res.status(201).json({idAccount, DateRead})
      
    }).catch(error => {
      console.log(error)
    })

        return res.status(201).json();
  }



}

export { CreateDateReadController };
