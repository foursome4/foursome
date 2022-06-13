import { IPlainsRepository } from "../../repositories/IPlainsRepository";

interface IRequest {
  name: string;
  value: string;
  period:number;
}

class CreatePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    ("");
  }

  async execute({name, value, period }: IRequest): Promise<void>{

   await this.PlainsRepository.create({name, value, period });
  }
}

export { CreatePlainsUseCase };
