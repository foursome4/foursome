import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteMemberUseCase } from "./DeleteMemberUseCase";

class DeleteMemberController {
  constructor(private DeleteMemberUseCase: DeleteMemberUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.membersEvent.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteMemberController };


