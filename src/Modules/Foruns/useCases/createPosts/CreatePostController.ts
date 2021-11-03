import { Request, Response } from "express";

import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {
    ("");
  }
  handle(req: Request, res: Response): Response {
    const { id, text, image, movie, category, id_group, id_member, username } =
      req.body;
    this.createPostUseCase.execute({
      id,
      text,
      image,
      movie,
      category,
      id_group,
      id_member,
      username,
    });

    return res.status(201).send();
  }
}

export { CreatePostController };
