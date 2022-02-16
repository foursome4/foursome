import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFriendsUseCase } from "./ListFriendsUseCase";

class ListFriendsController {
  constructor(private listFriendsUseCase: ListFriendsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {id }= req.params;

   await collections.friends.find({$or:[{"idAccount":id },{"idFriend":id }]}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
   //   console.log(result)
      return result;
     })

  }
}

export { ListFriendsController };

