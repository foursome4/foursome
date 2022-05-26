import { Request, Response } from "express";

import { CreateUsersOnlineUseCase } from "./CreateUsersOnlineUseCase";

class CreateUsersOnlineController {
  constructor(private createUsersOnlineUseCase: CreateUsersOnlineUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible
     } =
      req.body;

    this.createUsersOnlineUseCase.execute({
      idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateUsersOnlineController };
