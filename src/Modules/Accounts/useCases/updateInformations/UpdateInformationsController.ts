import { Request, Response } from "express";

import { UpdateInformationsUseCase } from "./UpdateInformationsUseCase";

class UpdateInformationsController {
  constructor(private updateInformationsUseCase: UpdateInformationsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { avatar, cover, relationship, city, uf,lookingFor } = req.body;
    const { id } = req.params;

    this.updateInformationsUseCase.execute({
      id, avatar, cover, relationship, city, uf, lookingFor
    });


    return res.status(201).send();
  }
}

export { UpdateInformationsController };
