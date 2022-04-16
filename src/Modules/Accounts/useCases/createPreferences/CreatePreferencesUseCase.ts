import { IPreferencesRepository } from "../../repositories/IPreferencesRepository";

interface IRequest {
  id: string;
  idAccount: string;
  men: string;
  woman: string;
  couple: string;
  trisal: string;
  transvestites: string;
  transsexuals: string;
  groups: string;
  proposal: string;
}

class CreatePreferencesUseCase {
  constructor(private accountRepository: IPreferencesRepository) {
    " ";
  }

  execute({id, idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups, proposal }: IRequest): void {


    this.accountRepository.create({
      id, idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups, proposal
    });
  }
}

export { CreatePreferencesUseCase };
