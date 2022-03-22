import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateDateReadMessageUseCase } from "./UpdateDateReadMessageUseCase";

class UpdateDateReadMessageController {
  constructor(private UpdateDateReadMessageUseCase: UpdateDateReadMessageUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { DateReadMessage } = req.body;
    const id = req.params; 


    await collections.dateReadMessage.findOneAndUpdate(id, {$set:{DateReadMessage}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateDateReadMessageController };
