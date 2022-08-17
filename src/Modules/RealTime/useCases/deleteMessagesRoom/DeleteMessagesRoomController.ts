import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteMessagesRoomUseCase } from "./DeleteMessagesRoomUseCase";

class DeleteMessagesRoomController {
  constructor(private DeleteMessagesUseCase: DeleteMessagesRoomUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const room = req.params;
      await collections.message.deleteOne(room)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteMessagesRoomController };
