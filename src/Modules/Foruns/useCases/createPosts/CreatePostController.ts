import { Request, Response } from "express";

import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {
    ("");
  }
  handle(req: Request, res: Response): Response {
    const { id_group,
      id_account,
      text,
      link, } =
      req.body;
    this.createPostUseCase.execute({
      id_group,
      id_account,
      text,
      link,
    });

    return res.status(201).send();
  }
}

export { CreatePostController };
