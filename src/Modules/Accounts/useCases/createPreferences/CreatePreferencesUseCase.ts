import { IPreferencesRepository } from "../../repositories/IPreferencesRepository";

interface IRequest {
  idAccount: string;
  men: string;
  woman: string;
  couple: string;
  trisal: string;
  transvestites: string;
  transsexuals: string;
  groups: string;
}

class CreatePreferencesUseCase {
  constructor(private accountRepository: IPreferencesRepository) {
    " ";
  }

  execute({idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups }: IRequest): void {


    this.accountRepository.create({
      idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups
    });
  }
}

export { CreatePreferencesUseCase };
