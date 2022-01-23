import { IPreferencesRepository } from "../../repositories/IPreferencesRepository";

interface IRequest {
  idAccount: string;
  search: string;
  relationship: string;
  humor: string;
  activities: string;
}

class CreatePreferencesUseCase {
  constructor(private accountRepository: IPreferencesRepository) {
    " ";
  }

  execute({idAccount, search, relationship, humor, activities }: IRequest): void {


    this.accountRepository.create({
      idAccount, search, relationship, humor, activities
    });
  }
}

export { CreatePreferencesUseCase };
