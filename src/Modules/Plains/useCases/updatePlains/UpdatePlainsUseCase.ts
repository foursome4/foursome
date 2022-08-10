import { IPlainsRepository } from "../../repositories/IPlainsRepository";

interface IRequest {
  reference: string;
  name: string;
  value: string;
  period:number;
}

class UpdatePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    " ";
  }
  
  async execute({reference, name, value, period }: IRequest): Promise<void> {
         await this.PlainsRepository.update({
       reference, name, value, period
      });

  }
}

export { UpdatePlainsUseCase };
