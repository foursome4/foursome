import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListUsersOnlineUseCase } from "./ListUsersOnlineUseCase";

class ListUsersOnlineController {
  constructor(private listPostseCase: ListUsersOnlineUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.usersOnline.find({}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListUsersOnlineController };
