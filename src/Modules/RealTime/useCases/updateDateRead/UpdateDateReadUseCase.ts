import { hash } from "bcrypt";
import { IDateReadRepository } from "../../repositories/IDateReadRepository";
import { Request, Response } from "express";

interface IRequest {
  DateRead: string;
  idAccount: string;
}

class UpdateDateReadUseCase {
  constructor(private DateReadRepository: IDateReadRepository) {
    " ";
  }
  
  async execute({DateRead, idAccount }: IRequest): Promise<void> {

      await this.DateReadRepository.update({
        DateRead, idAccount
      });

  }
}

export { UpdateDateReadUseCase };
