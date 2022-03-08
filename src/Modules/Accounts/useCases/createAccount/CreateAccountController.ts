import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";
import { v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { username, role, status, type, email, phone, online, patron, password } = req.body;
    const v4 = uuidv4()
    const id = (v4.substring(0, 6));


    await collections.accounts.insertOne({
      id, username, role, status, type, email, phone, online, patron, password
    }).then((result) => {
      console.log(result)
      res.status(201).json({id, username, role, status, type, email, phone, online, patron, password});
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })


  }
}

export { CreateAccountController };






