import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateDateReadLoginUseCase } from "./UpdateDateReadLoginUseCase";

class UpdateDateReadLoginController {
  constructor(private UpdateDateReadLoginUseCase: UpdateDateReadLoginUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { DateReadLogin } = req.body;
    const id = req.params; 


    await collections.dateReadLogin.findOneAndUpdate(id, {$set:{DateReadLogin}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateDateReadLoginController };
