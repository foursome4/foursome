import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateDateReadMessageChatUseCase } from "./UpdateDateReadMessageChatUseCase";

class UpdateDateReadMessageChatController {
  constructor(private UpdateDateReadMessageChatUseCase: UpdateDateReadMessageChatUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { DateReadMessageChat } = req.body;
    const id = req.params; 


    await collections.dateReadMessageChat.findOneAndUpdate(id, {$set:{DateReadMessageChat}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateDateReadMessageChatController };
