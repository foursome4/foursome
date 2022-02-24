import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateAccountUseCase } from "./UpdateAccountUseCase";

class UpdateAccountController {
  constructor(private UpdateAccountUseCase: UpdateAccountUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { username, role, status, type, email, phone, online, password, patron } = req.body;
    const id = req.params; 


    await collections.accounts.findOneAndUpdate(id, {$set:{username, role, status, type, email, phone, online, password, patron}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateAccountController };
