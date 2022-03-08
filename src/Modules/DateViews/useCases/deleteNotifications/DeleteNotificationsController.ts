import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteNotificationsUseCase } from "./DeleteNotificationsUseCase";

class DeleteNotificationsController {
  constructor(private DeleteNotificationsUseCase: DeleteNotificationsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const idAccount = req.params;
      await collections.notifications.deleteOne(idAccount)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteNotificationsController };
