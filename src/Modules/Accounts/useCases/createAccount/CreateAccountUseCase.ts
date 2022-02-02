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
  code: string;
  online: boolean;
  password: Promise<string>;
}

class CreateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({username, role, status, type, email, phone, online, code, password }: IRequest): Promise<void> {
    const findByInvite = await this.accountRepository.findByInvite(email, code);
    const findEmail = await this.accountRepository.findByEmail(email);
    const findUsername = await this.accountRepository.findByUsername(username);
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.create({
        username, role, status, type, email, phone, code, online, password: passwordHash
      });

  }
}

export { CreateAccountUseCase };
