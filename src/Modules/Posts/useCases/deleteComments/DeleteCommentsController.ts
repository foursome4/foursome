import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteCommentsUseCase } from "./DeleteCommentsUseCase";

class DeleteCommentsController {
  constructor(private DeleteCommentsUseCase: DeleteCommentsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.comments.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteCommentsController };
