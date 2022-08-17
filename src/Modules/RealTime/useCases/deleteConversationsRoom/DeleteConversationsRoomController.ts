import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteConversationsRoomUseCase } from "./DeleteConversationsRoomUseCase";

class DeleteConversationsRoomController {
  constructor(private DeleteConversationsUseCase: DeleteConversationsRoomUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const room = req.params;
      await collections.conversations.deleteOne(room)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteConversationsRoomController };
