import { Request, Response } from "express";
import { CreateFollowersUseCase } from "./CreateFollowerstUseCase";

class CreateFollowersController {
  constructor(private createFollowersUseCase: CreateFollowersUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { id_account, id_friend, type, status } = req.body;

    this.createFollowersUseCase.execute({
      id_account, id_friend, type, status
    }).then((result) => {
      console.log(result)
      return res.status(201).json(result).send();
      
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateFollowersController };
