import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListLocationsUseCase } from "./ListLocationsUseCase";

class ListLocationsController {
  constructor(private listLocationsUseCase: ListLocationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.locations.find().toArray(function(err, result){
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

export { ListLocationsController };
