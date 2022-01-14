import { Request, Response } from "express";

import { CreateCommentsUseCase } from "./CreateCommentsUseCase";

class CreateCommentsController {
  constructor(private createCommentsUseCase: CreateCommentsUseCase) {
    ("");
  }
  handle(req: Request, res: Response): Response {
    const { text, id_post, id_account } = req.body;
    this.createCommentsUseCase.execute({
      text, id_post, id_account,
    });

    return res.status(201).send();
  }
}

export { CreateCommentsController };
