import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteEventsUseCase } from "./DeleteEventsUseCase";

class DeleteEventsController {
  constructor(private DeleteEventsUseCase: DeleteEventsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.events.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteEventsController };
