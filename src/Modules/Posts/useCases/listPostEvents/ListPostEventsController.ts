import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostEventsUseCase } from "./ListPostEventsUseCase";

class ListPostEventsController {
  constructor(private ListPostEventseCase: ListPostEventsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
              const {idEvent} = req.params;
   await collections.post.find({idEvent}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPostEventsController };


