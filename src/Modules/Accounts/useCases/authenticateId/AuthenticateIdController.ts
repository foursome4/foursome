import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { AuthenticateIdUseCase } from "./AuthenticateIdUseCase";

class AuthenticateIdController {
  constructor(private authenticateIdUseCase: AuthenticateIdUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { id } = req.body;

    this.authenticateIdUseCase.execute({
      id
    }).then((result) => {
      console.log({"Message": "Login efetuado com sucesso"})
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { AuthenticateIdController };