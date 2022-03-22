import { hash } from "bcrypt";
import { INavigateUserRepository } from "../../repositories/INavigateUserRepository";
import { Request, Response } from "express";

interface IRequest {
  navigator: string;
  idAccount: string;
  username: string;
}

class CreateNavigateUserUseCase {
  constructor(private accountRepository: INavigateUserRepository) {
    " ";
  }
  
  async execute({username, idAccount, navigator }: IRequest): Promise<void> {

      await this.accountRepository.create({
        username, idAccount, navigator
      });

  }
}

export { CreateNavigateUserUseCase };