import { Request, Response } from "express";

import { CreateForunsUseCase } from "./CreateForunsUseCase";

class CreateForunsController {
  constructor(private createForunsUseCase: CreateForunsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { name, description, avatar, theme } = req.body;

    this.createForunsUseCase.execute({
      name,
      description,
      avatar,
      theme,
    });


    return res.status(201).send();
  }
}

export { CreateForunsController };
