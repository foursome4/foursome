import { Request, Response } from "express";

import { CreateConversationsUseCase } from "./CreateConversationsUseCase";

class CreateConversationsController {
  constructor(private createConversationsUseCase: CreateConversationsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idAccount, idFriend, room
     } =
      req.body;
    this.createConversationsUseCase.execute({
      idAccount, idFriend, room
    }).then((result) => {
      return res.status(201).json({room, idAccount, idFriend, }).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateConversationsController };
