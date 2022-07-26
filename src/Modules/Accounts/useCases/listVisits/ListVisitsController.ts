import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListVisitsUseCase } from "./ListVisitsUseCase";

class ListVisitsController {
  constructor(private ListVisitsUseCase: ListVisitsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idFriend = req.params;
   await collections.visits.find(idFriend).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListVisitsController };
