import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { AuthenticateAccountUseCase } from "./AuthenticateAccountUseCase";

class AuthenticateAccountController {
  constructor(private authenticateAccountUseCase: AuthenticateAccountUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { email, username, password } = req.body;

    this.authenticateAccountUseCase.execute({
      email, username, password,
    }).then((result) => {
      console.log({"Message": "Login efetuado com sucesso"})
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { AuthenticateAccountController };