import { Request, Response } from "express";

import { CreatePreferencesUseCase } from "./CreatePreferencesUseCase";

class CreatePreferencesController {
  constructor(private createPreferencesUseCase: CreatePreferencesUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const {
      idAccount, search, relationship, humor, activities } = req.body;

    this.createPreferencesUseCase.execute({
      idAccount, search, relationship, humor, activities
    });


    return res.status(201).send();
  }
}

export { CreatePreferencesController };
