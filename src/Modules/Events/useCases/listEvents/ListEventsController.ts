import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListEventsUseCase } from "./ListEventsUseCase";

class ListEventsController {
  constructor(private listEventsUseCase: ListEventsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.events.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err).send()
      } else {
        res.status(200).json(result).send()
      }
      console.log(result)
      return result;
     })

  }
}

export { ListEventsController };
