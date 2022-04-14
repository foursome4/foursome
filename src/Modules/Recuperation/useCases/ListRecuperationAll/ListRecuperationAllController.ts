import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListRecuperationAllUseCase } from "./ListRecuperationAllUseCase";

class ListRecuperationAllController {
  constructor(private ListRecuperationUseCase: ListRecuperationAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
   await collections.recuperation.find(idAccount).toArray(function(err, result){
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

export { ListRecuperationAllController };
