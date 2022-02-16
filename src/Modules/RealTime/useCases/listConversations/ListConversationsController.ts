import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListConversationsUseCase } from "./ListConversationsUseCase";

class ListConversationsController {
  constructor(private listConversationseCase: ListConversationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idAccount, idFriend } = req.params;
   await collections.conversations.find({idAccount, idFriend}).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListConversationsController };
