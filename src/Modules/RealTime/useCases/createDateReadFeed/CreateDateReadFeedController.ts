import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import {v4 as uuidv4} from 'uuid'
import { CreateDateReadFeedUseCase } from "./CreateDateReadFeedUseCase";

class CreateDateReadFeedController {
  constructor(private createDateReadFeedUseCase: CreateDateReadFeedUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const { idAccount, DateReadFeed } = req.body;
    const id = uuidv4();


    await collections.dateReadFeed.insertOne({id, idAccount, DateReadFeed, created_at: new Date(),}).then((result) => {
      console.log(result);
      res.status(201).json({idAccount, DateReadFeed})
      
    }).catch(error => {
      console.log(error)
    })

        return res.status(201).json();
  }



}

export { CreateDateReadFeedController };
