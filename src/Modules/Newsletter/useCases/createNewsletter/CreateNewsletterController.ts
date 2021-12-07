import { Request, Response } from "express";
import { CreateNewsletteruseCase } from "./CreateNewsletterUsecase";

class CreateNewsletterController {
  constructor(private createNewsletterUseCase: CreateNewsletteruseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { email } = req.body;

    this.createNewsletterUseCase.execute({
      email
    });


    return res.status(201).send();
  }
}

export { CreateNewsletterController };
