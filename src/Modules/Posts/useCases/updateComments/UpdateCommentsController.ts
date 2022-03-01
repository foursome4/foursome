import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateCommentsUseCase } from "./UpdateCommentsUseCase";

class UpdateCommentsController {
  constructor(private UpdateCommentsUseCase: UpdateCommentsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { text } = req.body;
    const id = req.params; 


    await collections.comments.findOneAndUpdate(id, {$set:{text}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdateCommentsController };
