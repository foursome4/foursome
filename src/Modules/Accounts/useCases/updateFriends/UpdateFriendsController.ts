import { Request, Response } from "express";

import { UpdateFriendsUseCase } from "./UpdateFriendsUseCase";

class UpdateFriendsController {
  constructor(private UpdateFriendsUseCase: UpdateFriendsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { idAccount, idFriend, type, status } = req.body;
    const { id } = req.params;

    this.UpdateFriendsUseCase.execute({
        id, idAccount, idFriend, type, status
    });


    return res.status(201).send();
  }
}

export { UpdateFriendsController };

