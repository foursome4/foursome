import { Request, Response } from "express";

import { CreateReplyUseCase } from "./CreateReplyUseCase";

class CreateReplyController {
  constructor(private createReplyUseCase: CreateReplyUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idAccount, idComment, avatar, nickname, username, text
     } =
      req.body;
    this.createReplyUseCase.execute({
      idAccount, idComment, avatar, nickname, username, text
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateReplyController };
