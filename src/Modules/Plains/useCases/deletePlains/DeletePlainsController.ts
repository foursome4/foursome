import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeletePlainsUseCase } from "./DeletePlainsUseCase";

class DeletePlainsController {
  constructor(private DeletePlainsUseCase: DeletePlainsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.plains.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeletePlainsController };
