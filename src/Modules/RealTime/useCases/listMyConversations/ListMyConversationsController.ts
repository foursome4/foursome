import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMyConversationsUseCase } from "./ListMyConversationsUseCase";

class ListMyConversationsController {
  constructor(private listMyConversationseCase: ListMyConversationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idAccount}  = req.params;
   await collections.conversations.find({idAccount}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      console.log(result)
      return result;
     })

  }
}

export { ListMyConversationsController };
