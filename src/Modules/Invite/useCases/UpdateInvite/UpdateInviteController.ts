import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateInviteUseCase } from "./UpdateInviteUseCase";

class UpdateInviteController {
  constructor(private UpdateInviteUseCase: UpdateInviteUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {code, idAccount, username, name, email, type, phone, active, resend } = req.body;
    const id = req.params; 


    await collections.invites.findOneAndUpdate(id, {$set:{code, idAccount, username, name, email, type, phone, active, resend}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })
  }
}

export { UpdateInviteController };
