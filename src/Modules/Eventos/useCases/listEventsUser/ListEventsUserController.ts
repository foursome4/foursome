import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListEventsUserUseCase } from "./ListEventsUserUseCase";

class ListEventsUserController {
  constructor(private listEventsUserUseCase: ListEventsUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params
   await collections.events.find(idAccount).toArray(function(err, result){
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

export { ListEventsUserController };
