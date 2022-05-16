import { Request, Response } from "express";

import { CreateEventsUseCase } from "./CreateEventsUseCase";

class CreateEventsController {
  constructor(private createEventsUseCase: CreateEventsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { 
      name,
      description,
      avatar,
      cover,
      theme,
      status,
      date,
      street,
      number,
      district,
      city,
      uf,
      complement,
      reference,
      idAccount,
      username,
      avatarUser,
      nickname,
      featured
  } = req.body;

    this.createEventsUseCase.execute({
      name,
      description,
      avatar,
      cover,
      theme,
      status,
      date,
      street,
      number,
      district,
      city,
      uf,
      complement,
      reference,
      idAccount,
      username,
      avatarUser,
      nickname,
      featured
    });


    return res.status(201);
  }
}

export { CreateEventsController };
