import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePlainsUseCase } from "./UpdatePlainsUseCase";

class UpdatePlainsController {
  constructor(private UpdatePlainsUseCase: UpdatePlainsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {reference, name, value, period} = req.body;
    const id = req.params; 


    await collections.plains.findOneAndUpdate(id, {$set:{reference, name, value, period}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdatePlainsController };
