import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPlainsUnicIdUseCase } from "./ListPlainsUnicIdUseCase";

class ListPlainsUnicIdController {
  constructor(private listPostseCase: ListPlainsUnicIdUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const id = req.params;
await collections.plains.find(id).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPlainsUnicIdController };
