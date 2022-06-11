import { collections } from "../../../../../services/database.service";
import { IDateReadFeedRepository } from "../../repositories/IDateReadFeedRepository";

interface IRequest {
  DateReadFeed: string;
  idAccount: string;
}

class CreateDateReadFeedUseCase {
  constructor(private DateReadFeedRepository: IDateReadFeedRepository) {
    ("");
  }

  execute({ DateReadFeed, idAccount }: IRequest): void {

    this.DateReadFeedRepository.findByIdAccount(idAccount);
    this.DateReadFeedRepository.create({
      DateReadFeed, idAccount
    });
  }
}

export { CreateDateReadFeedUseCase };
