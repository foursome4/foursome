import { hash } from "bcrypt";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  online: boolean;
  patron: string;
  password: Promise<string>;
}

class UpdatePasswordUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({id, username, role, status, type, email, phone, online, password, patron }: IRequest): Promise<void> {
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.update({
        id, username, role, status, type, email, phone, online,patron, password: passwordHash
      });

  }
}

export { UpdatePasswordUseCase };
