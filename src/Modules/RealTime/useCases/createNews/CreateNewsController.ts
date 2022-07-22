import { Request, Response } from "express";

import { CreateNewsUseCase } from "./CreateNewsUseCase";

class CreateNewsController {
  constructor(private createNewsUseCase: CreateNewsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
     id, destination, idAccount, title, text, link, type, prioriry,
     } =
      req.body;
    this.createNewsUseCase.execute({
     id, destination, idAccount, title, text, link, type, prioriry,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateNewsController };