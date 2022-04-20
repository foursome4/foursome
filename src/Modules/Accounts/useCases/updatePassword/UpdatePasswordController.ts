import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";
import { hash } from "bcrypt";

class UpdatePasswordController {
  constructor(private UpdatPasswordUseCase: UpdatePasswordUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { password} = req.body;
    const email = req.params; 
    console.log(password)
    console.log(email)

    const passwordHash = await hash(await password, 8);
    console.log(passwordHash)

    await collections.accounts.findOneAndUpdate(email, {$set:{password: passwordHash}}, {upsert: true}).then((result) => {
      console.log("Senha atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePasswordController };
