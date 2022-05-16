import { IPlainsRepository } from "../../repositories/IPlainsRepository";

interface IRequest {
  name: string;
  value: string;
  period:string;
}

class UpdatePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    " ";
  }
  
  async execute({name, value, period }: IRequest): Promise<void> {
         await this.PlainsRepository.update({
       name, value, period
      });

  }
}

export { UpdatePlainsUseCase };
