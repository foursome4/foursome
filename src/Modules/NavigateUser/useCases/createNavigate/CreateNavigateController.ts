import { Request, Response } from "express";
import { CreateNavigateUserUseCase } from "./CreateNavigateUseCase";

class CreateNavigateUserController {
  constructor(private createNavigateUserUseCase: CreateNavigateUserUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { username, idAccount, navigator} = req.body;

    this.createNavigateUserUseCase.execute({
      username, idAccount, navigator
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateNavigateUserController };






