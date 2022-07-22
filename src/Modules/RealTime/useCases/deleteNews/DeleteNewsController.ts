import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteNewsUseCase } from "./DeleteNewsUseCase";

class DeleteNewsController {
  constructor(private DeleteNewsUseCase: DeleteNewsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.news.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteNewsController };
