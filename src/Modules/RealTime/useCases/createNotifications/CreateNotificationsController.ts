import { Request, Response } from "express";

import { CreateNotificationsUseCase } from "./CreateNotificationsUseCase";

class CreateNotificationsController {
  constructor(private createNotificationsUseCase: CreateNotificationsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
     idAccount, idPatrono, text 
     } =
      req.body;

    this.createNotificationsUseCase.execute({
     idAccount, idPatrono, text 
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateNotificationsController };