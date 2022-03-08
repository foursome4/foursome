import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMyConversations2UseCase } from "./ListMyConversations2UseCase";

class ListMyConversations2Controller {
  constructor(private listMyConversations2eCase: ListMyConversations2UseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idFriend } = req.params;
   await collections.conversations.find({idFriend}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListMyConversations2Controller };
