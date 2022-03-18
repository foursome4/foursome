import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import {v4 as uuidv4} from 'uuid'
import { CreateDateReadMessageUseCase } from "./CreateDateReadMessageUseCase";

class CreateDateReadMessageController {
  constructor(private createDateReadMessageUseCase: CreateDateReadMessageUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const { idAccount, DateReadMessage } = req.body;
    const id = uuidv4();


    await collections.dateReadMessage.insertOne({id, idAccount, DateReadMessage, created_at: new Date(),}).then((result) => {
      console.log(result);
      res.status(201).json({idAccount, DateReadMessage})
      
    }).catch(error => {
      console.log(error)
    })

        return res.status(201).json();
  }



}

export { CreateDateReadMessageController };
