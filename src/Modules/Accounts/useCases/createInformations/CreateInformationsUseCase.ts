import { hash } from "bcrypt";
import { IInformationsRepository } from "../../repositories/IInformationsRepository";
import { Request, Response } from "express";

interface IRequest {
  idAccount: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
}

class CreateInformationsUseCase {
  constructor(private InformationsRepository: IInformationsRepository) {
    " ";
  }
  
  async execute({idAccount, nickname, avatar, cover, relationship, city, uf }: IRequest): Promise<void> {
    const findById = await this.InformationsRepository.findById(idAccount);

      await this.InformationsRepository.create({
        idAccount, nickname, avatar, cover, relationship, city, uf
      });

  }
}

export { CreateInformationsUseCase };
