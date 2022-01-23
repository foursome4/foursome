import { Request, Response } from "express";

import { CreateCommentsUseCase } from "./CreateCommentsUseCase";

class CreateCommentsController {
  constructor(private createCommentsUseCase: CreateCommentsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idAccount, idPost, avatar, nickname, username, text
     } =
      req.body;
    this.createCommentsUseCase.execute({
      idAccount, idPost, avatar, nickname, username, text
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateCommentsController };
