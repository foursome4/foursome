import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import {v4 as uuidv4} from 'uuid'
import { CreateDateReadMessageChatUseCase } from "./CreateDateReadMessageChatUseCase";

class CreateDateReadMessageChatController {
  constructor(private createDateReadMessageChatUseCase: CreateDateReadMessageChatUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const { idAccount, DateReadMessageChat } = req.body;
    const id = uuidv4();


    await collections.dateReadMessageChat.insertOne({id, idAccount, DateReadMessageChat, created_at: new Date(),}).then((result) => {
      console.log(result);
      res.status(201).json({idAccount, DateReadMessageChat})
      
    }).catch(error => {
      console.log(error)
    })

        return res.status(201).json();
  }



}

export { CreateDateReadMessageChatController };
