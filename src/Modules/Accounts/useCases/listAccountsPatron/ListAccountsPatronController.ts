import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccountsPatronUseCase } from "./ListAccountsPatronUseCase";

class ListAccountsPatronController {
  constructor(private ListAccountsPatronUseCase: ListAccountsPatronUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const patron = req.params;
   await collections.accounts.find(patron).toArray(function(err, result){
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

export { ListAccountsPatronController };
