import { IInformationsRepository } from "../../repositories/IInformationsRepository";


class DeleteInformationsUseCase {
  constructor(private InformationsRepository: IInformationsRepository) {
    ("");
  }

  async execute({idAccount}){

   await this.InformationsRepository.delete({idAccount});
  }
}

export { DeleteInformationsUseCase };
