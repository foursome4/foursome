import { Request, Response } from "express";

import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
         idAccount,
    avatar,
    nickname,
    username,
    nameGroup,
    nameForum,
    nameEvent,
    idEvent,
    idGroup,
    idForum,
    type,
    like,
    text,
    link,
    typeAccount,
    ufAccount,
    cityAccount
     } =
      req.body;
    this.createPostUseCase.execute({
         idAccount,
    avatar,
    nickname,
    username,
    nameGroup,
    nameForum,
    nameEvent,
    idEvent,
    idGroup,
    idForum,
    type,
    like,
    text,
    link,
    typeAccount,
    ufAccount,
    cityAccount
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreatePostController };
