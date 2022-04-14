import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteRecuperationUseCase } from "./DeleteRecuperationUseCase";

class DeleteRecuperationController {
  constructor(private DeleteRecuperationUseCase: DeleteRecuperationUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.recuperation.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteRecuperationController };
