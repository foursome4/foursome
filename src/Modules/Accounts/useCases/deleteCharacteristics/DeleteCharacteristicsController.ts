import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteCharacteristicsUseCase } from "./DeleteCharacteristicsUseCase";

class DeleteCharacteristicsController {
  constructor(private DeleteCharacteristicsUseCase: DeleteCharacteristicsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const idAccount = req.params;
      await collections.characteristics.deleteOne(idAccount)
      .then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { DeleteCharacteristicsController };
