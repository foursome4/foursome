import { Request, Response } from "express";

import { CreateLocationsUseCase } from "./CreateLocationsUseCase";

class CreateLocationsController {
  constructor(private createLocationsUseCase: CreateLocationsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const {   name,
      description,
      avatar,
      cover,
      theme,
      privacity,
      date,
      status,
      street,
    number,
    district,
    city,
    uf,
    complement,
    reference, } = req.body;

    this.createLocationsUseCase.execute({
      name,
      description,
      avatar,
      cover,
      theme,
      privacity,
      date,
      status,
      street,
      number,
      district,
      city,
      uf,
      complement,
      reference,
    });


    return res.status(201);
  }
}

export { CreateLocationsController };
