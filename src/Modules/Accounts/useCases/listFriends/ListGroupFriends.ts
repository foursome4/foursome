import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFriendsUseCase } from "./ListFriendsUseCase";

class ListFriendsController {
  constructor(private listFriendsUseCase: ListFriendsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id_account = req.body;
   await collections.friends.find(id_account).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      console.log(result)
      return result;
     })

  }
}

export { ListFriendsController };
