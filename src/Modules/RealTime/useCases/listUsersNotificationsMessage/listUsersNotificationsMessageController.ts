import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNotificationsMessageOneUseCase } from "./listUsersNotificationsMessageUseCase";

class ListNotificationsMessageOneController {
  constructor(private listPostseCase: ListNotificationsMessageOneUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idPatrono = req.params;
   await collections.notificationsMessage.find(idPatrono).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListNotificationsMessageOneController };
