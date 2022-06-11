import { collections } from "../../../../../services/database.service";
import { IDateReadLoginRepository } from "../../repositories/IDateReadLoginRepository";

interface IRequest {
  DateReadLogin: string;
  idAccount: string;
}

class CreateDateReadLoginUseCase {
  constructor(private DateReadLoginRepository: IDateReadLoginRepository) {
    ("");
  }

  execute({ DateReadLogin, idAccount }: IRequest): void {

    this.DateReadLoginRepository.findByIdAccount(idAccount);
    this.DateReadLoginRepository.create({
      DateReadLogin, idAccount
    });
  }
}

export { CreateDateReadLoginUseCase };
