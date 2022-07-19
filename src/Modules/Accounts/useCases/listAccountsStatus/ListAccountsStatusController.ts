import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccountsStatusUseCase } from "./ListAccountsStatusUseCase";

class ListAccountsStatusController {
  constructor(private ListAccountsStatusUseCase: ListAccountsStatusUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = req.params;
   await collections.accounts.find(status).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })
  }
////
}

export { ListAccountsStatusController };
