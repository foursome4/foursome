import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListInformationsUseCase } from "./ListInformationsUseCase";

class ListInformationsController {
  constructor(private listInformationsUseCase: ListInformationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
    await collections.informations.find(idAccount).toArray(function(err, result){
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

export { ListInformationsController };
