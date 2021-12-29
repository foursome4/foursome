import { Request, Response } from "express";

import { ListGroupUseCase } from "./ListGroupUseCase";

class ListGroupController {
  constructor(private listGroupUseCase: ListGroupUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const groups = this.listGroupUseCase.execute();

    return res.json(groups);
  }
}

export { ListGroupController };
