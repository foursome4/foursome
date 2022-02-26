import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListGroupUnicUseCase } from "./ListGroupUnicUseCase";

class ListGroupUnicController {
  constructor(private listGroupUnicUseCase: ListGroupUnicUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id = req.params;
   await collections.groups.find(id).toArray(function(err, result){
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

export { ListGroupUnicController };
