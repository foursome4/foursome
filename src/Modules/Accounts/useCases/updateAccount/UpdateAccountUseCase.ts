import { hash } from "bcrypt";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { Request, Response } from "express";

interface IRequest {
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  online: boolean;
  password: Promise<string>;
}

class UpdateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({username, role, status, type, email, phone, online, password }: IRequest): Promise<void> {
    const findEmail = await this.accountRepository.findByEmail(email);
    const findUsername = await this.accountRepository.findByUsername(username);
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.update({
        username, role, status, type, email, phone, online, password: passwordHash
      });

  }
}

export { UpdateAccountUseCase };
