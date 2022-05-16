import { IPlainsRepository } from "../../repositories/IPlainsRepository";

class DeletePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    ("");
  }

  async execute({id}){

   await this.PlainsRepository.delete({id});
  }
}

export { DeletePlainsUseCase };
