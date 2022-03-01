import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMembersEventUseCase } from "./ListMembersEventUseCase";

class ListMembersEventController {
  constructor(private listMembersEventUseCase: ListMembersEventUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idEvent = req.params;
   await collections.membersEvent.find(idEvent).toArray(function(err, result){
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

export { ListMembersEventController };
