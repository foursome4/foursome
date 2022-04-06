import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateLikeUseCase } from "./UpdateLikeUseCase";

class UpdateLikeController {
  constructor(private UpdateLikeUseCase: UpdateLikeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {like} = req.body;
    const id = req.params; 


    await collections.post.findOneAndUpdate(id, {$set:{like}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdateLikeController };
