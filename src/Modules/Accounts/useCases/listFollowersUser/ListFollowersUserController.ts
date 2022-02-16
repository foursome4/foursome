import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFollowersUserUseCase } from "./ListFollowersUserUseCase";

class ListFollowersUserController {
  constructor(private ListFollowersUserUseCase: ListFollowersUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idAccount}= req.params;
    console.log(idAccount)

   await collections.followers.find({$or:[{"idAccount":idAccount },{"idFriend":idAccount }]}).toArray(function(err, result){
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

export { ListFollowersUserController };
