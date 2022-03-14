import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDateReadUseCase } from "./ListDateReadUseCase";

class ListDateReadController {
  constructor(private listPostseCase: ListDateReadUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params
   await collections.dateRead.find(idAccount).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListDateReadController };
