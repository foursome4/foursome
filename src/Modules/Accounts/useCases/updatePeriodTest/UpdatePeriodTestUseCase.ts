import { hash } from "bcrypt";
import { IPeriodTestRepository } from "../../repositories/IPeriodTestRepository";
import { Request, Response } from "express";

interface IRequest {
  stringDate: string;
  idAccount: string;
  username: string;
}

class UpdatePeriodTestUseCase {
  constructor(private PeriodTestRepository: IPeriodTestRepository) {
    " ";
  }
  
  async execute({stringDate, username, idAccount}: IRequest): Promise<void> {

      await this.PeriodTestRepository.update({stringDate, username, idAccount});

  }
}

export { UpdatePeriodTestUseCase };
