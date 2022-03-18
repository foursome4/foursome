import { Request, Response } from "express";
import { CreateVisitsUseCase } from "./CreateVisitsUseCase";

class CreateVisitsController {
  constructor(private createVisitsUseCase: CreateVisitsUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { idAccount, username, idFriend } = req.body;

    this.createVisitsUseCase.execute({
      idAccount, username, idFriend
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateVisitsController };






