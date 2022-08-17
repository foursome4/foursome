import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListConversationsAllUseCase } from "./ListConversationsAllUseCase";

class ListConversationsAllController {
  constructor(private listConversationseCase: ListConversationsAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.conversations.find({}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListConversationsAllController };
