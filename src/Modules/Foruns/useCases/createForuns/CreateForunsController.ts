import { Request, Response } from "express";

import { CreateForunsUseCase } from "./CreateForunsUseCase";

class CreateForunsController {
  constructor(private createForunsUseCase: CreateForunsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { name, description, avatar, cover, theme, idAccount, username, nickname, avatarUser } = req.body;

    this.createForunsUseCase.execute({
      name, description, avatar, cover, theme, idAccount, username, nickname, avatarUser
    });


    return res.status(201).json();
  }
}

export { CreateForunsController };
