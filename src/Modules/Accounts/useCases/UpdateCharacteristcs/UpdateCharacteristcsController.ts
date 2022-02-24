import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateCharacteristcsUseCase } from "./UpdateCharacteristcsUseCase";

class UpdateCharacteristcsController {
  constructor(private UpdateCharacteristcsUseCase: UpdateCharacteristcsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {  birthDate,
        sex,
        sexualOption,
        education,
        sign,
        heigth,
        weight,
        physique,
        ethnicity,
        eyes,
        hair,
        tattos,
        smokes } = req.body;
    const id = req.params; 


    await collections.characteristics.findOneAndUpdate(id, {$set:{birthDate,
        sex,
        sexualOption,
        education,
        sign,
        heigth,
        weight,
        physique,
        ethnicity,
        eyes,
        hair,
        tattos,
        smokes}}, {upsert: false}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     // console.log(error);
      return res.status(500)
    })

  }
}

export { UpdateCharacteristcsController };
