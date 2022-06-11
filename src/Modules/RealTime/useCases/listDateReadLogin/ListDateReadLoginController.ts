import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDateReadLoginUseCase } from "./ListDateReadLoginUseCase";

class ListDateReadLoginController {
  constructor(private listPostseCase: ListDateReadLoginUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params
   await collections.dateReadLogin.find(idAccount).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListDateReadLoginController };
