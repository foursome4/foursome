import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteInformationsUseCase } from "./DeleteInformationsUseCase";

class DeleteInformationsController {
  constructor(private DeleteInformationsUseCase: DeleteInformationsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const idAccount = req.params;
      await collections.informations.deleteOne(idAccount)
      .then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { DeleteInformationsController };
