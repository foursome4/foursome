import { Request, Response } from "express";
import { CreateRecuperationUseCase } from "./CreateRecuperationUseCase";

class CreateRecuperationController {
  constructor(private createRecuperationUseCase: CreateRecuperationUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { code, email } = req.body;

    this.createRecuperationUseCase.execute({
      code, email
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateRecuperationController };
