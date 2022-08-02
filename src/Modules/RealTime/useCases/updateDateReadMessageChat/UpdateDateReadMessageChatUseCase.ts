import { hash } from "bcrypt";
import { IDateReadMessageChatRepository } from "../../repositories/IDateReadMessageChatRepository";
import { Request, Response } from "express";

interface IRequest {
  DateReadMessageChat: string;
  idAccount: string;
}

class UpdateDateReadMessageChatUseCase {
  constructor(private DateReadMessageChatRepository: IDateReadMessageChatRepository) {
    " ";
  }
  
  async execute({DateReadMessageChat, idAccount }: IRequest): Promise<void> {

      await this.DateReadMessageChatRepository.update({
        DateReadMessageChat, idAccount
      });

  }
}

export { UpdateDateReadMessageChatUseCase };
