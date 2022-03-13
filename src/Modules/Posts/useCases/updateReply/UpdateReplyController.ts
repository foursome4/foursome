import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateReplyUseCase } from "./UpdateReplyUseCase";

class UpdateReplyController {
  constructor(private UpdateReplyUseCase: UpdateReplyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { text } = req.body;
    const id = req.params; 


    await collections.reply.findOneAndUpdate(id, {$set:{text}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdateReplyController };
