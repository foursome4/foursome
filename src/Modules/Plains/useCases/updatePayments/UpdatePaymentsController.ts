import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePaymentsUseCase } from "./UpdatePaymentsUseCase";

class UpdatePaymentsController {
  constructor(private UpdatePaymentsUseCase: UpdatePaymentsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant, aceptTerms } = req.body;
    const id = req.params; 


    await collections.payments.findOneAndUpdate(id, {$set:{idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant, aceptTerms}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdatePaymentsController };
