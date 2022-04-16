import { Request, Response } from "express";

import { CreateCharacteristicsUseCase } from "./CreateCharacteristicsUseCase";

class CreateCharacteristicsController {
  constructor(private createCharacteristicsUseCase: CreateCharacteristicsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const {
        id,
        idAccount,
        birthDate,
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
        smokes, } = req.body;

    this.createCharacteristicsUseCase.execute({
        id,
        idAccount,
        birthDate,
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
        smokes,
    });


    return res.status(201).send();
  }
}

export { CreateCharacteristicsController };
