import { ICharacteristicsRepository } from "../../repositories/ICharacteristicsRepository";


class DeleteCharacteristicsUseCase {
  constructor(private CharacteristicsRepository: ICharacteristicsRepository) {
    ("");
  }

  async execute({idAccount}){

   await this.CharacteristicsRepository.delete({idAccount});
  }
}

export { DeleteCharacteristicsUseCase };
