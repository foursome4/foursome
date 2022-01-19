import { Request, Response } from "express";
import { CreateInvitesUseCase } from "./CreateInvitesUseCase";

class CreateInvitesController {
  constructor(private createInvitesUseCase: CreateInvitesUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { inviteCode, idAccount, name, email, phone } = req.body;

    this.createInvitesUseCase.execute({
      inviteCode, idAccount, name, email, phone
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateInvitesController };