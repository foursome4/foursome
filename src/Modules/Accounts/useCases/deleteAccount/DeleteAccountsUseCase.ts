import { IAccountsRepository } from "../../repositories/IAccountsRepository";


class DeleteAccountsUseCase {
  constructor(private AccountsRepository: IAccountsRepository) {
    ("");
  }

  async execute({id}){

   await this.AccountsRepository.delete({id});
  }
}

export { DeleteAccountsUseCase };
