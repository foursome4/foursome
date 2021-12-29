import { Request, Response } from "express";

import { CreateAccountUseCase } from "./CreateAccountUseCase";

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { nickname, username, role, type, email, phone, password } = req.body;

    this.createAccountUseCase.execute({
      nickname, username, role, type, email, phone, password,
    });


    return res.status(201).send();
  }
}

export { CreateAccountController };
