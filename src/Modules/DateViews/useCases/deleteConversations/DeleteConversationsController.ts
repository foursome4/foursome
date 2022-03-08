import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteConversationsUseCase } from "./DeleteConversationsUseCase";

class DeleteConversationsController {
  constructor(private DeleteConversationsUseCase: DeleteConversationsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.conversations.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteConversationsController };
