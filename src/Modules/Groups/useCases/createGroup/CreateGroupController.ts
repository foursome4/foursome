import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { CreateGroupUseCase } from "./CreateGroupUseCase";
import {v4 as uuidv4} from 'uuid'

class CreateGroupController {
  constructor(private createGroupUseCase: CreateGroupUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { name, description, avatar, cover, theme, privacity, idAccount, username, avatarUser } = req.body;
    const id = uuidv4();

    await collections.groups.insertOne({id, name, description, avatar, cover, theme, privacity, idAccount, username, avatarUser, created_at: new Date(),}).then((result) => {
      console.log(result);
      res.status(201).json({id, name, description, avatar, cover, theme, privacity, idAccount, username, avatarUser})
      
    }).catch(error => {
      console.log(error)
    })

    


    return res.status(201).json();
  }
}

export { CreateGroupController };


