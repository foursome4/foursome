import { hash } from "bcrypt";
import { IPeriodTestRepository } from "../../repositories/IPeriodTestRepository";
import { Request, Response } from "express";

interface IRequest {
  stringDate: string;
  idAccount: string;
  username: string;
  idFriend: string;
}

class CreatePeriodTestUseCase {
  constructor(private PeriodTestRepository: IPeriodTestRepository) {
    " ";
  }
  
  async execute({ stringDate, idAccount, username, idFriend }: IRequest): Promise<void> {
    const findEmail = await this.PeriodTestRepository.findByIdAccount(idAccount);

      await this.PeriodTestRepository.create({
        stringDate, idAccount, username, idFriend
      });

  }
}

export { CreatePeriodTestUseCase };