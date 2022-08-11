import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateStatusUseCase } from "./UpdateStatusUseCase";
import { hash } from "bcrypt";

class UpdateStatusController {
  constructor(private UpdatStatusUseCase: UpdateStatusUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { status} = req.body;
    const id = req.params; 
    console.log(status)
    console.log(id)

    await collections.accounts.findOneAndUpdate(id, {$set:{status}}, {upsert: true}).then((result) => {
      console.log("Status atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateStatusController };
