import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteNewsReplyUseCase } from "./DeleteNewsReplyUseCase";

class DeleteNewsReplyController {
  constructor(private DeleteNewsReplyUseCase: DeleteNewsReplyUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.newsreply.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteNewsReplyController };
