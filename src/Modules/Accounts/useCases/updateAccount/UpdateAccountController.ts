import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateAccountUseCase } from "./UpdateAccountUseCase";

class UpdateAccountController {
  constructor(private UpdateAccountUseCase: UpdateAccountUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { username, role, status, type, email, phone, online, password } = req.body;
    const id = req.params; 


    await collections.accounts.findOneAndUpdate(id, {username, role, status, type, email, phone, online, password}, {upsert: true}).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { UpdateAccountController };
