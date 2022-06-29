import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateInformationsUseCase } from "./UpdateInformationsUseCase";

class UpdateInformationsController {
  constructor(private UpdateInformationsUseCase: UpdateInformationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { nickname, avatar, cover, relationship, city, uf, país } = req.body;
    const id = req.params; 


    await collections.informations.findOneAndUpdate(id, {$set:{nickname, avatar, cover, relationship, city, uf, país}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdateInformationsController };
