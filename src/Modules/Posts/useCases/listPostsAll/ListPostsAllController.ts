import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostsAllUseCase } from "./ListPostsAllUseCase";

class ListPostsAllController {
  constructor(private listPostseCase: ListPostsAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const type = req.params;
   await collections.post.find(type).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPostsAllController };

