import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListInvitesLimitsUseCase } from "./ListInvitesLimitsUseCase";

class ListInvitesLimitsController {
  constructor(private ListInvitesLimitsUseCase: ListInvitesLimitsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const page = req.query.page;
    const limit = req.query.limit;

   await collections.invites.find().sort( { created_at: -1 } ).skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
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

export { ListInvitesLimitsController };
