import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeletePaymentsUseCase } from "./DeletePaymentsUseCase";

class DeletePaymentsController {
  constructor(private DeletePaymentsUseCase: DeletePaymentsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.payments.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeletePaymentsController };
