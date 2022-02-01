import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccountsUseCase } from "./ListAccountsUseCase";

class ListAccountsController {
  constructor(private listAccountsUseCase: ListAccountsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.accounts.find().toArray(function(err, result){
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

export { ListAccountsController };
