import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNotificationsOneUseCase } from "./listUsersNotificationsUseCase";

class ListNotificationsOneController {
  constructor(private listPostseCase: ListNotificationsOneUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idPatrono = req.params;
   await collections.notifications.find(idPatrono).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListNotificationsOneController };
