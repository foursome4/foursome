import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { FindRecuperationUseCase } from "./FindRecuperationUseCase";

class FindRecuperationController {
  constructor(private FindRecuperationUseCase: FindRecuperationUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {email, code} = req.params;
   await collections.recuperation.find({email, code}).toArray(function(err, result){
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

export { FindRecuperationController };
