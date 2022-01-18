import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { nickname, username, role, status, type, email, phone, password, avatar, cover, relationship, city, uf, lookingFor } = req.body;

    this.createAccountUseCase.execute({
      nickname, username, role, status, type, email, phone, password, avatar, cover, relationship, city, uf, lookingFor
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateAccountController };
