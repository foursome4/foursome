import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNewsReplyUseCase } from "./ListNewsReplyUseCase";

class ListNewsReplyController {
  constructor(private listNewsReplyeCase: ListNewsReplyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idNews = req.params;
   await collections.newsreply.find(idNews).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListNewsReplyController };
