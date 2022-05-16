import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeletePostUseCase } from "./DeletePostUseCase";

class DeletePostController {
  constructor(private DeletePostUseCase: DeletePostUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.post.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeletePostController };
