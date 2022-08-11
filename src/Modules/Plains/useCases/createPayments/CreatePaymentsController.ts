import { Request, Response } from "express";

import { CreatePaymentsUseCase } from "./CreatePaymentsUseCase";

class CreatePaymentsController {
  constructor(private createPaymentsUseCase: CreatePaymentsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant, aceptTerms, status
     } =
      req.body;
    this.createPaymentsUseCase.execute({
      idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant, aceptTerms, status
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreatePaymentsController };
