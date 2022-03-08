import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNotificationsAllUseCase } from "./ListNotificationsAllUseCase";

class ListNotificationsAllController {
  constructor(private listPostseCase: ListNotificationsAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.notifications.find({}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListNotificationsAllController };
