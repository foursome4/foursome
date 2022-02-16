import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListReactionsUseCase } from "./ListReactionUseCase";

class ListReactionsController {
  constructor(private listReactionseCase: ListReactionsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
              const idPost = req.params;
   await collections.reactions.find(idPost).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })

  }
}

export { ListReactionsController };
