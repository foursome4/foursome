import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostGroupsUseCase } from "./ListPostGroupsUseCase";

class ListPostGroupsController {
  constructor(private ListPostGroupseCase: ListPostGroupsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
              const {idGroup} = req.params;
   await collections.post.find({idGroup}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPostGroupsController };


