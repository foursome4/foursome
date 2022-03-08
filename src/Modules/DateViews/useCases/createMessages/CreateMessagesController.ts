import { Request, Response } from "express";

import { CreateMessagesUseCase } from "./CreateMessagesUseCase";

class CreateMessagesController {
  constructor(private createMessagesUseCase: CreateMessagesUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idRoom, idAccount, link, avatar, nickname, username, text
     } =
      req.body;
    this.createMessagesUseCase.execute({
      idRoom, idAccount, link, avatar, nickname, username, text
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateMessagesController };
