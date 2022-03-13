import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListReplyUseCase } from "./ListReplyUseCase";

class ListReplyController {
  constructor(private listReplyeCase: ListReplyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idComment = req.params;
   await collections.reply.find(idComment).toArray(function(err, result){
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

export { ListReplyController };
