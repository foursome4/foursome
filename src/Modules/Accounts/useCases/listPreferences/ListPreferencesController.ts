import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPreferencesUseCase } from "./ListPreferencesUseCase";

class ListPreferencesController {
  constructor(private listPreferencesUseCase: ListPreferencesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
    await collections.preferences.find(idAccount).toArray(function(err, result){
       if(err) {
         res.status(500).json(err)
       } else {
         res.status(200).json(result)
       }
       return result;
      })


  }
}

export { ListPreferencesController };
