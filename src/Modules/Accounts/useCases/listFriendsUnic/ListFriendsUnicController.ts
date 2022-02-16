import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFriendsUnicUseCase } from "./ListFriendsUnicUseCase";

class ListFriendsUnicController {
  constructor(private ListFriendsUnicUseCase: ListFriendsUnicUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
   await collections.friends.find(idAccount).toArray(function(err, result){
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

export { ListFriendsUnicController };
