import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateUsersOnlineUseCase } from "./UpdateUsersOnlineUseCase";

class UpdateUsersOnlineController {
  constructor(private UpdateUsersOnlineUseCase: UpdateUsersOnlineUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song } = req.body;
    const id = req.params; 


    await collections.usersOnline.findOneAndUpdate(id, {$set:{idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateUsersOnlineController };
