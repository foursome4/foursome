import { collections } from "../../../../../services/database.service";
import { IDateReadMessageChatRepository } from "../../repositories/IDateReadMessageChatRepository";

interface IRequest {
  DateReadMessageChat: string;
  idAccount: string;
}

class CreateDateReadMessageChatUseCase {
  constructor(private DateReadMessageChatRepository: IDateReadMessageChatRepository) {
    ("");
  }

  execute({ DateReadMessageChat, idAccount }: IRequest): void {

    this.DateReadMessageChatRepository.findByIdAccount(idAccount);
    this.DateReadMessageChatRepository.create({
      DateReadMessageChat, idAccount
    });
  }
}

export { CreateDateReadMessageChatUseCase };
