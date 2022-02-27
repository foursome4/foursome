import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostForunsUseCase } from "./ListPostForunsUseCase";

class ListPostForunsController {
  constructor(private ListPostForunseCase: ListPostForunsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
              const {idForum} = req.params;
   await collections.post.find({idForum}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPostForunsController };


