import { hash } from "bcrypt";
import { IDateReadMessageRepository } from "../../repositories/IDateReadMessageRepository";
import { Request, Response } from "express";

interface IRequest {
  DateReadMessage: string;
  idAccount: string;
}

class UpdateDateReadMessageUseCase {
  constructor(private DateReadMessageRepository: IDateReadMessageRepository) {
    " ";
  }
  
  async execute({DateReadMessage, idAccount }: IRequest): Promise<void> {

      await this.DateReadMessageRepository.update({
        DateReadMessage, idAccount
      });

  }
}

export { UpdateDateReadMessageUseCase };
