import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNavigateUserUseCase } from "./ListNavigateUseCase";

class ListNavigateUserController {
  constructor(private listNavigateUserUseCase: ListNavigateUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.navigator.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListNavigateUserController };
