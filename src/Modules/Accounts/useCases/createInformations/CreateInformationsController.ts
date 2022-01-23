import { Request, Response } from "express";
import { CreateInformationsUseCase } from "./CreateInformationsUseCase";

class CreateInformationsController {
  constructor(private createInformationsUseCase: CreateInformationsUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { idAccount, nickname, avatar, cover, relationship, city, uf } = req.body;

    this.createInformationsUseCase.execute({
      idAccount, nickname, avatar, cover, relationship, city, uf
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateInformationsController };
