import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteUsersOnlineUseCase } from "./DeleteUsersOnlineUseCase";

class DeleteUsersOnlineController {
  constructor(private DeleteUsersOnlineUseCase: DeleteUsersOnlineUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const idAccount = req.params;
      await collections.usersOnline.deleteOne(idAccount)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteUsersOnlineController };
