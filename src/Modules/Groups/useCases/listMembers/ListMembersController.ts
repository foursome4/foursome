import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMembersUseCase } from "./ListMembersUseCase";

class ListMembersController {
  constructor(private listMembersUseCase: ListMembersUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.members_groups.find().toArray(function(err, result){
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

export { ListMembersController };
