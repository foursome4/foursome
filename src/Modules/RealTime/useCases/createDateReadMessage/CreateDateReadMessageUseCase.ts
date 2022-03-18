import { collections } from "../../../../../services/database.service";
import { IDateReadMessageRepository } from "../../repositories/IDateReadMessageRepository";

interface IRequest {
  DateReadMessage: string;
  idAccount: string;
}

class CreateDateReadMessageUseCase {
  constructor(private DateReadMessageRepository: IDateReadMessageRepository) {
    ("");
  }

  execute({ DateReadMessage, idAccount }: IRequest): void {

    this.DateReadMessageRepository.findByIdAccount(idAccount);
    this.DateReadMessageRepository.create({
      DateReadMessage, idAccount
    });
  }
}

export { CreateDateReadMessageUseCase };
