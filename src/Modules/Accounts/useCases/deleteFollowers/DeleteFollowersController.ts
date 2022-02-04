import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteFollowersUseCase } from "./DeleteFollowersUseCase";

class DeleteFollowersController {
  constructor(private DeleteFollowersUseCase: DeleteFollowersUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.followers.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { DeleteFollowersController };
