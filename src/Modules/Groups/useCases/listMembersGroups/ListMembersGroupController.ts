import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMembersGroupUseCase } from "./ListMembersGroupUseCase";

class ListMembersGroupController {
  constructor(private listMembersGroupUseCase: ListMembersGroupUseCase) {
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

export { ListMembersGroupController };
