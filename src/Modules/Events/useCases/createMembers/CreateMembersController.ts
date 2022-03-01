import { Request, Response } from "express";

import { CreateMembersUseCase } from "./CreateMembersUseCase";

class CreateMembersController {
  constructor(private createMembersUseCase: CreateMembersUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { idAccount, idEvent, role, status, avatar, username, nickname } = req.body;

    this.createMembersUseCase.execute({
      idAccount, idEvent, role, status, avatar, username, nickname
    });


    return res.status(201).send();
  }
}

export { CreateMembersController };
