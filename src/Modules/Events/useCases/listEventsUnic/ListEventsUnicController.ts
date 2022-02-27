import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListEventsUnicUseCase } from "./ListEventsUnicUseCase";

class ListEventsUnicController {
  constructor(private listEventsUnicUseCase: ListEventsUnicUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id = req.params
   await collections.events.find(id).toArray(function(err, result){
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

export { ListEventsUnicController };
