import { Request, Response } from "express";

import { CreatePaymentsUseCase } from "./CreatePaymentsUseCase";

class CreatePaymentsController {
  constructor(private createPaymentsUseCase: CreatePaymentsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idPlain, idAccount, username, email, namePlain, value, period, linkComprovant
     } =
      req.body;
    this.createPaymentsUseCase.execute({
      idPlain, idAccount, username, email, namePlain, value, period, linkComprovant
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreatePaymentsController };
