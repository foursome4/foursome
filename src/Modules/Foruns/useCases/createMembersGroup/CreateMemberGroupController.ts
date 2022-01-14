import { Request, Response } from "express";

import { CreateMemberGroupUseCase } from "./CreateMemberGroupUseCase";

class CreateMemberGroupController {
  constructor(private createMemberGroupUseCase: CreateMemberGroupUseCase) {
    ("");
  }
  handle(req: Request, res: Response): Response {
    const { id_account, role, status, id_group } = req.body;
    this.createMemberGroupUseCase.execute({
      id_account,
      role,
      status,
      id_group,
    });

    return res.status(201).send();
  }
}

export { CreateMemberGroupController };
