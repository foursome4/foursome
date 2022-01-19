import { Request, Response } from "express";

import { CreateReactionsUseCase } from "./CreateReactionsUseCase";

class CreateReactionsController {
  constructor(private createReactionsUseCase: CreateReactionsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idAccount,
      idPost,
     } =
      req.body;
    this.createReactionsUseCase.execute({
      idAccount,
      idPost,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateReactionsController };
