import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePeriodTestUseCase } from "./UpdatePeriodTestUseCase";
import { hash } from "bcrypt";

class UpdatePeriodTestController {
  constructor(private UpdatPeriodTestUseCase: UpdatePeriodTestUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { stringDate} = req.body;
    const { username} = req.body;
    const { idAccount} = req.body;
    const { created_at } = req.body;
    const id = req.params; 

    await collections.periodTest.findOneAndUpdate(id, {$set:{stringDate, username, idAccount, created_at}}, {upsert: true}).then((result) => {
      console.log("Senha atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePeriodTestController };
