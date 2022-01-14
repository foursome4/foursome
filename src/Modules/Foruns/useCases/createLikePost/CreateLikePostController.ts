import { Request, Response } from "express";

import { CreateLikePostUseCase } from "./CreateLikePostUseCase";

class CreateLikePostController {
  constructor(private createLikePostUseCase: CreateLikePostUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const {id_post,
      id_account, } = req.body;

    this.createLikePostUseCase.execute({
      id_post,
      id_account,
    });


    return res.status(201).send();
  }
}

export { CreateLikePostController };
