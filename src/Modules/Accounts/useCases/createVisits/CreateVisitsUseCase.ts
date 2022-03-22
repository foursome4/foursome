import { hash } from "bcrypt";
import { IVisitsRepository } from "../../repositories/IVisitsRepository";
import { Request, Response } from "express";

interface IRequest {
  idAccount: string;
  username: string;
  idFriend: string;
}

class CreateVisitsUseCase {
  constructor(private VisitsRepository: IVisitsRepository) {
    " ";
  }
  
  async execute({ idAccount, username, idFriend }: IRequest): Promise<void> {
    const findEmail = await this.VisitsRepository.findByIdAccount(idAccount);

      await this.VisitsRepository.create({
        idAccount, username, idFriend
      });

  }
}

export { CreateVisitsUseCase };