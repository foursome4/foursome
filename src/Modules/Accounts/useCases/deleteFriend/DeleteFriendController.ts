import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteFriendUseCase } from "./DeleteFriendUseCase";

class DeleteFriendController {
  constructor(private DeleteFriendUseCase: DeleteFriendUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.friends.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { DeleteFriendController };
