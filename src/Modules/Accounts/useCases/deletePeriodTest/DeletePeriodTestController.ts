import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeletePeriodTestUseCase } from "./DeletePeriodTestUseCase";

class DeletePeriodTestController {
  constructor(private DeletePeriodTestUseCase: DeletePeriodTestUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.periodTest.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { DeletePeriodTestController };
