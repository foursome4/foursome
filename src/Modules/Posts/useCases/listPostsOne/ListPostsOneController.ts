import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostsOneUseCase } from "./ListPostsOneUseCase";

class ListPostsOneController {
  constructor(private listPostseCase: ListPostsOneUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id = req.params;
   await collections.post.find(id).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPostsOneController };
