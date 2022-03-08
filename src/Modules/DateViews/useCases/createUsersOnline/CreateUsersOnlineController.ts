import { Request, Response } from "express";

import { CreateUsersOnlineUseCase } from "./CreateUsersOnlineUseCase";

class CreateUsersOnlineController {
  constructor(private createUsersOnlineUseCase: CreateUsersOnlineUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idAccount, username, nickname, avatar, lat, long, equalCity 
     } =
      req.body;

    this.createUsersOnlineUseCase.execute({
      idAccount, username, nickname, avatar, lat, long, equalCity 
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateUsersOnlineController };
