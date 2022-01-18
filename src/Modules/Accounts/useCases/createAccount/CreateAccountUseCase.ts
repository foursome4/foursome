import { hash } from "bcrypt";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { Request, Response } from "express";

interface IRequest {
  nickname: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  password: Promise<string>;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  lookingFor: string
}

class CreateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({nickname, username, role, status, type, email, phone, password, avatar, cover, relationship, city, uf, lookingFor }: IRequest): Promise<void> {
    const findEmail = await this.accountRepository.findByEmail(email);
    const findUsername = await this.accountRepository.findByUsername(username);
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.create({
        nickname, username, role, status, type, email, phone, password: passwordHash, avatar, cover, relationship, city, uf, lookingFor
      });

  }
}

export { CreateAccountUseCase };
