import { Request, Response } from "express";

import { CreateGroupUseCase } from "./CreateGroupUseCase";

class CreateGroupController {
  constructor(private createGroupUseCase: CreateGroupUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { name, description, avatar, cover, theme, privacity } = req.body;

    this.createGroupUseCase.execute({
      name,
      description,
      avatar,
      cover,
      theme,
      privacity
    });


    return res.status(201).send();
  }
}

export { CreateGroupController };
