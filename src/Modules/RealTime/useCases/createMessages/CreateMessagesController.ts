import { Request, Response } from "express";

import { CreateMessagesUseCase } from "./CreateMessagesUseCase";

class CreateMessagesController {
  constructor(private createMessagesUseCase: CreateMessagesUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
       id, idRoom, idAccount, link, type, avatar, nickname, username, text, created_at
     } =
      req.body;
    this.createMessagesUseCase.execute({
       id, idRoom, idAccount, link, type, avatar, nickname, username, text, created_at
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateMessagesController };
