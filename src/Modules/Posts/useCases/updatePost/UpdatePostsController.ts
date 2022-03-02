import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePostsUseCase } from "./UpdatePostsUseCase";

class UpdatePostsController {
  constructor(private UpdatePostsUseCase: UpdatePostsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {text} = req.body;
    const id = req.params; 


    await collections.post.findOneAndUpdate(id, {$set:{text}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdatePostsController };
