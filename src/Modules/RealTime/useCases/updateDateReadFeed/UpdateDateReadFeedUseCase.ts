import { hash } from "bcrypt";
import { IDateReadFeedRepository } from "../../repositories/IDateReadFeedRepository";
import { Request, Response } from "express";

interface IRequest {
  DateReadFeed: string;
  idAccount: string;
}

class UpdateDateReadFeedUseCase {
  constructor(private DateReadFeedRepository: IDateReadFeedRepository) {
    " ";
  }
  
  async execute({DateReadFeed, idAccount }: IRequest): Promise<void> {

      await this.DateReadFeedRepository.update({
        DateReadFeed, idAccount
      });

  }
}

export { UpdateDateReadFeedUseCase };
