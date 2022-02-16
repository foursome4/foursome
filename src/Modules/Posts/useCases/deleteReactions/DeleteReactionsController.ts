import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteReactionsUseCase } from "./DeleteReactionsUseCase";

class DeleteReactionsController {
  constructor(private DeleteReactionsUseCase: DeleteReactionsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.reactions.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteReactionsController };
