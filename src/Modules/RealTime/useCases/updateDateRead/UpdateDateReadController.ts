import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateDateReadUseCase } from "./UpdateDateReadUseCase";

class UpdateDateReadController {
  constructor(private UpdateDateReadUseCase: UpdateDateReadUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { DateRead } = req.body;
    const id = req.params; 


    await collections.dateRead.findOneAndUpdate(id, {$set:{DateRead}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateDateReadController };
