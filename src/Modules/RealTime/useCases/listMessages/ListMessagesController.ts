import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMessagesUseCase } from "./ListMessagesUseCase";

class ListMessagesController {
  constructor(private listMessageseCase: ListMessagesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
              const idRoom = req.params;
   await collections.message.find(idRoom).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      //console.log(result)
      return result;
     })

  }
}

export { ListMessagesController };
