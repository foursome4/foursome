import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListCommentsUseCase } from "./ListCommentsUseCase";

class ListCommentsController {
  constructor(private listCommentseCase: ListCommentsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idPost = req.params;
   await collections.comments.find(idPost).toArray(function(err, result){
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

export { ListCommentsController };
