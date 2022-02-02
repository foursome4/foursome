import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { FindInvitesUseCase } from "./FindInvitesUseCase";

class FindInvitesController {
  constructor(private FindInvitesUseCase: FindInvitesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {email, code} = req.params;
   await collections.invites.find({email, code}).toArray(function(err, result){
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

export { FindInvitesController };
