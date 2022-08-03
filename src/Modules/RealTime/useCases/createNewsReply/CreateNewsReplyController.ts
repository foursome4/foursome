import { Request, Response } from "express";

import { CreateNewsReplyUseCase } from "./CreateNewsReplyUseCase";

class CreateNewsReplyController {
  constructor(private createNewsUseCase: CreateNewsReplyUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
     id, idNews, idAccount,  username, nickname, text, link
     } =
      req.body;
    this.createNewsUseCase.execute({
     id, idNews, idAccount,  username, nickname, text, link
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateNewsReplyController };
