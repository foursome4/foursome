import { Request, Response } from "express";
import { CreatePeriodTestUseCase } from "./CreatePeriodTestUseCase";

class CreatePeriodTestController {
  constructor(private createPeriodTestUseCase: CreatePeriodTestUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { stringDate, idAccount, username, idFriend } = req.body;

    this.createPeriodTestUseCase.execute({
      stringDate, idAccount, username, idFriend
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreatePeriodTestController };






