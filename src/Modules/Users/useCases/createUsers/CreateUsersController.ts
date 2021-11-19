import { Request, Response } from "express";

import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController {
  constructor(private createUsersUseCase: CreateUsersUseCase) {
    ("");
  }
  handle(req: Request, res: Response): Response {
    const {
      username,
      nickname,
      role,
      status,
      plan,
      active_plan,
      birth_date,
      email,
      phone,
      uf,
      city,
      sexual_orientation,
      search,
      sign,
      password,
    } = req.body;
    this.createUsersUseCase.execute({
      username,
      nickname,
      role,
      status,
      plan,
      active_plan,
      birth_date,
      email,
      phone,
      uf,
      city,
      sexual_orientation,
      search,
      sign,
      password,
    });

    return res.status(201).send();
  }
}

export { CreateUsersController };
