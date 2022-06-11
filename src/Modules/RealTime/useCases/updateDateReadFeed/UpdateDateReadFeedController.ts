import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateDateReadFeedUseCase } from "./UpdateDateReadFeedUseCase";

class UpdateDateReadFeedController {
  constructor(private UpdateDateReadFeedUseCase: UpdateDateReadFeedUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { DateReadFeed } = req.body;
    const id = req.params; 


    await collections.dateReadFeed.findOneAndUpdate(id, {$set:{DateReadFeed}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateDateReadFeedController };
