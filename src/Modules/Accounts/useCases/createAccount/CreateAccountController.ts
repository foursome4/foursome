import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, país, username, role, status, type, email, phone, online, patron, password, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude, recommendation } = req.body;

    this.createAccountUseCase.execute({
      id, país, username, role, status, type, email, phone, online, patron, password, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude, recommendation
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateAccountController };






