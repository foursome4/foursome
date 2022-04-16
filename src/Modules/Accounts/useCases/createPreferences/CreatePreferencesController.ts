import { Request, Response } from "express";

import { CreatePreferencesUseCase } from "./CreatePreferencesUseCase";

class CreatePreferencesController {
  constructor(private createPreferencesUseCase: CreatePreferencesUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const {
     id, idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups, proposal} = req.body;

    this.createPreferencesUseCase.execute({
     id, idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups, proposal
    });


    return res.status(201).send();
  }
}

export { CreatePreferencesController };
