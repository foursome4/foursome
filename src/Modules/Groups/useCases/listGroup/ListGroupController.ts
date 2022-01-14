import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListGroupUseCase } from "./ListGroupUseCase";

class ListGroupController {
  constructor(private listGroupUseCase: ListGroupUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.groups.find().toArray(function(err, result){
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

export { ListGroupController };
