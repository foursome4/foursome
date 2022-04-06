import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListInformationsAllUseCase } from "./ListInformationsAllUseCase";

class ListInformationsAllController {
  constructor(private listInformationsAllUseCase: ListInformationsAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    await collections.informations.find().toArray(function(err, result){
       if(err) {
         res.status(500).json(err)
       } else {
         res.status(200).json(result)
       }
     //  console.log(result)
       return result;
      })


  }
}

export { ListInformationsAllController };
