import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteInvitesUseCase } from "./DeleteInvitesUseCase";

class DeleteInvitesController {
  constructor(private DeleteInvitesUseCase: DeleteInvitesUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.invites.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteInvitesController };
