import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeletePreferencesUseCase } from "./DeletePreferencesUseCase";

class DeletePreferencesController {
  constructor(private DeletePreferencesUseCase: DeletePreferencesUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const idAccount = req.params;
      await collections.preferences.deleteOne(idAccount)
      .then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send();
    })

  }
}

export { DeletePreferencesController };
