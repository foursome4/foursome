import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDateReadLoginAllUseCase } from "./ListDateReadLoginAllUseCase";

class ListDateReadLoginAllController {
  constructor(private listPostseCase: ListDateReadLoginAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.dateReadLogin.find({}).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        console.log(result.length);
       // const dateFilter = result.filter(date => new Date(result.created_at).getDate() === new Date().getDate())
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListDateReadLoginAllController };
