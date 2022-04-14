import { IRecuperationRepository } from "../../repositories/IRecuperationRepository";

class DeleteRecuperationUseCase {
  constructor(private RecuperationRepository: IRecuperationRepository) {
    ("");
  }

  async execute({id}){

   await this.RecuperationRepository.delete({id});
  }
}

export { DeleteRecuperationUseCase };
