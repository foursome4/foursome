import { Request, Response } from "express";

import { UpdateFriendsUseCase } from "./UpdateFriendsUseCase";

class UpdateFriendsController {
  constructor(private UpdateFriendsUseCase: UpdateFriendsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { status } = req.body;
    const { id } = req.params;

    this.UpdateFriendsUseCase.execute({
        status, id
    });


    return res.status(201);
  }
}

export { UpdateFriendsController };

