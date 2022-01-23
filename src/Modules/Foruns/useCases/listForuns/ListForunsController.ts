import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListForunsUseCase } from "./ListForunsUseCase";

class ListForunsController {
  constructor(private listForunsUseCase: ListForunsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.foruns.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err).send()
      } else {
        res.status(200).json(result).send()
      }
      console.log(result)
      return result;
     })

  }
}

export { ListForunsController };
