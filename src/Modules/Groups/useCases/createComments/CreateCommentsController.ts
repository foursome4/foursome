import { Request, Response } from "express";

import { CreateCommentsUseCase } from "./CreateCommentsUseCase";

class CreateCommentsController {
  constructor(private createCommentsUseCase: CreateCommentsUseCase) {
    ("");
  }
  handle(req: Request, res: Response): Response {
    const { id, text, id_post, id_user, username } = req.body;
    this.createCommentsUseCase.execute({
      id,
      text,
      id_post,
      id_user,
      username,
    });

    return res.status(201).send();
  }
}

export { CreateCommentsController };
