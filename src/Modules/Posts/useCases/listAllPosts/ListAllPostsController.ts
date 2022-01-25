import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAllPostsUseCase } from "./ListAllPostsUseCase";

class ListAllPostsController {
  constructor(private listPostseCase: ListAllPostsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.post.find({}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListAllPostsController };
