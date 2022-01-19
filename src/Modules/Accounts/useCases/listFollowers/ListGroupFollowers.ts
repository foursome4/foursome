import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFollowersUseCase } from "./ListFollowersUseCase";

class ListFollowersController {
  constructor(private listFollowersUseCase: ListFollowersUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.followers.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err).send()
      } else {
        res.status(200).json(result).send()
      }
      console.log(result)
      return result;
     })

  }
}

export { ListFollowersController };
