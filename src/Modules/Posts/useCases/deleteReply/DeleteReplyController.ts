import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteReplyUseCase } from "./DeleteReplyUseCase";

class DeleteReplyController {
  constructor(private DeleteReplyUseCase: DeleteReplyUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.reply.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteReplyController };
