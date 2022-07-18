import { hash } from "bcrypt";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  país: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  online: boolean;
  patron: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  cep: string;
  latitude: string;
  longitude: string;
  recommendation: string;
  password: Promise<string>;
}

class CreateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({id, país, username, role, status, type, email, phone, online, patron, password, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude, recommendation }: IRequest): Promise<void> {
    const findEmail = await this.accountRepository.findByEmail(email);
    const findUsername = await this.accountRepository.findByUsername(username);
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.create({
        id, país, username, role, status, type, email, phone, online, patron, password: passwordHash, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude, recommendation
      });

  }
}

export { CreateAccountUseCase };