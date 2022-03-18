import { Request, Response } from "express";

import { CreateNotificationsMessageUseCase } from "./CreateNotificationsMessageUseCase";

class CreateNotificationsMessageController {
  constructor(private createNotificationsMessageUseCase: CreateNotificationsMessageUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
     idAccount, idFriend, text 
     } =
      req.body;

    this.createNotificationsMessageUseCase.execute({
     idAccount, idFriend, text 
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateNotificationsMessageController };
