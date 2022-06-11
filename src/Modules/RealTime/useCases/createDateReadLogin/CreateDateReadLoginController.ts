import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import {v4 as uuidv4} from 'uuid'
import { CreateDateReadLoginUseCase } from "./CreateDateReadLoginUseCase";

class CreateDateReadLoginController {
  constructor(private createDateReadLoginUseCase: CreateDateReadLoginUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const { idAccount, DateReadLogin } = req.body;
    const id = uuidv4();


    await collections.dateReadLogin.insertOne({id, idAccount, DateReadLogin, created_at: new Date(),}).then((result) => {
      console.log(result);
      res.status(201).json({idAccount, DateReadLogin})
      
    }).catch(error => {
      console.log(error)
    })

        return res.status(201).json();
  }



}

export { CreateDateReadLoginController };
