import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccountsEmailUseCase } from "./ListAccountsEmailUseCase";

class ListAccountsEmailController {
  constructor(private ListAccountsEmailUseCase: ListAccountsEmailUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const email = req.params;
   await collections.accounts.find(email).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })
  }
}

export { ListAccountsEmailController };
