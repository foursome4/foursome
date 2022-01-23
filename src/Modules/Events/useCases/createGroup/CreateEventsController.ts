import { Request, Response } from "express";

import { CreateEventsUseCase } from "./CreateEventsUseCase";

class CreateEventsController {
  constructor(private createEventsUseCase: CreateEventsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const {   name,
      description,
      avatar,
      theme,
      privacity,
      date,
      status,
      address, } = req.body;

    this.createEventsUseCase.execute({
      name,
      description,
      avatar,
      theme,
      privacity,
      date,
      status,
      address,
    });


    return res.status(201).send();
  }
}

export { CreateEventsController };
