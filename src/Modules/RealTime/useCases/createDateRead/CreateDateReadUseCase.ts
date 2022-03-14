import { collections } from "../../../../../services/database.service";
import { IDateReadRepository } from "../../repositories/IDateReadRepository";

interface IRequest {
  DateRead: string;
  idAccount: string;
}

class CreateDateReadUseCase {
  constructor(private DateReadRepository: IDateReadRepository) {
    ("");
  }

  execute({ DateRead, idAccount }: IRequest): void {

    this.DateReadRepository.findByIdAccount(idAccount);
    this.DateReadRepository.create({
      DateRead, idAccount
    });
  }
}

export { CreateDateReadUseCase };
