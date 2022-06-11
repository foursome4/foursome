import { hash } from "bcrypt";
import { IDateReadLoginRepository } from "../../repositories/IDateReadLoginRepository";
import { Request, Response } from "express";

interface IRequest {
  DateReadLogin: string;
  idAccount: string;
}

class UpdateDateReadLoginUseCase {
  constructor(private DateReadLoginRepository: IDateReadLoginRepository) {
    " ";
  }
  
  async execute({DateReadLogin, idAccount }: IRequest): Promise<void> {

      await this.DateReadLoginRepository.update({
        DateReadLogin, idAccount
      });

  }
}

export { UpdateDateReadLoginUseCase };
