import { Request, Response } from "express";

import { CreateNewsUseCase } from "./CreateNewsUseCase";

class CreateNewsController {
  constructor(private createNewsUseCase: CreateNewsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
     id, patron, reply, destination, destinationName, idAccount,  username, nickname, title, text, link, type, priority,
     } =
      req.body;
    this.createNewsUseCase.execute({
     id, patron, reply, destination, destinationName, idAccount,  username, nickname, title, text, link, type, priority,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateNewsController };
