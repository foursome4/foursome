import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDateReadMessageChatUseCase } from "./ListDateReadMessageChatUseCase";

class ListDateReadMessageChatController {
  constructor(private listPostseCase: ListDateReadMessageChatUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params
   await collections.dateReadMessageChat.find(idAccount).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListDateReadMessageChatController };
