import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteAccountsUseCase } from "./DeleteAccountsUseCase";

class DeleteAccountsController {
  constructor(private DeleteAccountsUseCase: DeleteAccountsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.accounts.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { DeleteAccountsController };
