import { IPreferencesRepository } from "../../repositories/IPreferencesRepository";


class DeletePreferencesUseCase {
  constructor(private PreferencesRepository: IPreferencesRepository) {
    ("");
  }

  async execute({idAccount}){

   await this.PreferencesRepository.delete({idAccount});
  }
}

export { DeletePreferencesUseCase };
