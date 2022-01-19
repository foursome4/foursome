import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFriendsUseCase } from "./ListFriendsUseCase";

class ListFriendsController {
  constructor(private listFriendsUseCase: ListFriendsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.friends.find().toArray(function(err, result){
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

export { ListFriendsController };
