import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostsAllUseCase } from "./ListPostsAllUseCase";

class ListPostsAllController {
  constructor(private listPostseCase: ListPostsAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.body;
   await collections.post.find({}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err).send()
      } else {
        res.status(200).json(result).send()
      }
      console.log(result)
      return result;
     })

  }
}

export { ListPostsAllController };
