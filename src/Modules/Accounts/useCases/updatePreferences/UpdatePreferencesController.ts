import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePreferencesUseCase } from "./UpdatePreferencesUseCase";

class UpdatePreferencesController {
  constructor(private UpdatePreferencesUseCase: UpdatePreferencesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { men, woman, couple, trisal, transvestites, transsexuals, groups, proposal } = req.body;
    const id = req.params; 


    await collections.preferences.findOneAndUpdate(id, {$set:{men, woman, couple, trisal, transvestites, transsexuals, groups, proposal}}, {upsert: true}).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
     // console.log(error);
      return res.status(500).send()
    })

  }
}

export { UpdatePreferencesController };
