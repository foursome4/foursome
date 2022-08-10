import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPlainsUnicUseCase } from "./ListPlainsUnicUseCase";

class ListPlainsUnicController {
  constructor(private listPostseCase: ListPlainsUnicUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const reference = req.params;
await collections.plains.find(reference).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
        console.log(result)
        console.log(result.length)
      }
      return result;
     })

  }
}

export { ListPlainsUnicController };
