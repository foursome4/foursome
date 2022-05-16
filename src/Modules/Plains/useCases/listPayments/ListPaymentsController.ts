import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPaymentsUseCase } from "./ListPaymentsUseCase";

class ListPaymentsController {
  constructor(private listPaymentseCase: ListPaymentsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
   await collections.payments.find(idAccount).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListPaymentsController };
