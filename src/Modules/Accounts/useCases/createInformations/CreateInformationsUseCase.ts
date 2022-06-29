import { hash } from "bcrypt";
import { IInformationsRepository } from "../../repositories/IInformationsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idAccount: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  país: string;
}

class CreateInformationsUseCase {
  constructor(private InformationsRepository: IInformationsRepository) {
    " ";
  }
  
  async execute({id, idAccount, nickname, avatar, cover, relationship, city, uf, país }: IRequest): Promise<void> {
    const findById = await this.InformationsRepository.findById(idAccount);

      await this.InformationsRepository.create({
        id, idAccount, nickname, avatar, cover, relationship, city, uf, país
      });

  }
}

export { CreateInformationsUseCase };
