import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListCharacteristicsUseCase } from "./ListCharacteristicsUseCase";

class ListCharacteristicsController {
  constructor(private listCharacteristicsUseCase: ListCharacteristicsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id_account = req.params;
    await collections.characteristics.find(id_account).toArray(function(err, result){
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

export { ListCharacteristicsController };
