import { Request, Response } from "express";

import { CreateInformationsUseCase } from "./CreateInformationsUseCase";

class CreateInformationsController {
  constructor(private createInformationsUseCase: CreateInformationsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id_account, avatar, status, relationship, signo, date_birth, orientation, education, city, uf } = req.body;

    this.createInformationsUseCase.execute({
      id_account, avatar, status, relationship, signo, date_birth, orientation, education, city, uf,
    });


    return res.status(201).send();
  }
}

export { CreateInformationsController };
