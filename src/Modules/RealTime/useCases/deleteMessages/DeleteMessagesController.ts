import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteMessagesUseCase } from "./DeleteMessagesUseCase";

class DeleteMessagesController {
  constructor(private DeleteMessagesUseCase: DeleteMessagesUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.message.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteMessagesController };
